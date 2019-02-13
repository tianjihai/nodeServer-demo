/**
 * Created by
 * @Auther: tianjihai
 * @Date: 2019-01-24 22:43
 */

let express = require('express');
let app = express();
let http = require('http');

app.get('/tjh', function (req, res) {
    res.send('Hello World8081');

    let options = {
        hostname: '47.93.193.61',
        port: 80,
        path: '/json/city.json',
        method: 'get'
    };

    let request = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    request.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

// write data to request body
    request.write('data\n');
    request.write('data\n');
    request.end();

})


//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面test');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
