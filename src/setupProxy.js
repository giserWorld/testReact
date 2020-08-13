/**************************配置多个代理服务器***********************
 *更新时间:2020.08.14
 *1.配置代理只适用于"开发环境",如果在"产品环境"下则代理会失去作用，同时会出现跨域问题
 */
const proxy = require('http-proxy-middleware');
//配置代理(配置多个虚拟代理服务器,配置后需要重启)
module.exports = function(app) {
    app.use(
        proxy('/api',{//请求路径需要包含的路径 
            target: 'http://112.74.196.156',//目标代理服务器
            secure: false,
            changeOrigin: true,//创建虚拟代理服务器
            pathRewrite: {"^/api": "/"},// 路径重写  用 " " 替换 "/api" 
        })
    );
   app.use(
        proxy('/apc',{ 
            target: 'http://61.166.44.220:8082',
            secure: false,
            changeOrigin: true,
            pathRewrite: {"^/apc": "/"},
        })
    );
    app.use(
        proxy('/chuzhi',{ 
            target: 'http://d.l-try.com:8080',
            secure: false,
            changeOrigin: true,
            pathRewrite: {"^/chuzhi": "/"},
        })
    );
};