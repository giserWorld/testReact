/**************************搭建jsonServer服务器******************************/
const jsonServer = require('json-server');//导入json-server模块
const DB = require('./mock.js');//导入json对象数据
const server = jsonServer.create();//创建jsonServer服务器
const router = jsonServer.router(DB()) //将所创建的数据对象传入，以之生成相应的路由
const middlewares = jsonServer.defaults();//默认服务器中间件

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);//服务器的路由

//配置服务器IP、端口号
server.listen(
    {
        host: '0.0.0.0',
        port: 3000
    },
    function() {
        console.log(`JSON Server is running in http://0.0.0.0:3000`)
    }
)