/*****************************axios requests or responses拦截器*******************************/
import axios from 'axios';//http请求模块axios
//request拦截器
axios.interceptors.request.use(function (config){
    //添加token
    const myToken=window.sessionStorage.getItem("myToken");
    config.headers["token"]=myToken;
    return config;
},
function (error) {
console.log("请求出错!");
return Promise.reject(error);
});

//response拦截器
axios.interceptors.response.use(function(response){
// Do something with response data
return response;
},
function (error) {
console.log("响应出错!");
return Promise.reject(error);
});
export default axios;