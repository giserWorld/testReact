import axios from 'axios';//http请求模块axios
//import axios from './interceptors';//配置拦截器的axios
import qs from 'qs';//用qs.stringify()将对象序列化成URL的形式,qs这个包在install axios时就已经装了
/*********************基础的网络请求工具(配置axios http请求的方法)*****************
 *更新时间:2020.05.05
 *1.支持的请求方法：
    1)get(url, par):GET请求方式
    2)post(url, par):POST请求方式
    3)del(url, par):DEL请求方式
    4)put(url, par):PUT请求方式
 *日志:
 *1.优化get请求返回的数据结构
 */
/*****************************axios的请求的全局设置*******************************/
//axios.defaults.baseURL = 'https://api.example.com';//配置基础路径
axios.defaults.headers.post['Content-Type']='application/json;charset=UTF-8';
//配置post请求headers的param参数类型:"application/x-www-form-urlencoded"
//axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials=true;//带cookie请求
axios.defaults.timeout=5000//请求的超时时间 5000ms
//console.log(axios.defaults);



/**
 * Get方法
 * @param url
 * @param param
 * @returns {AxiosPromise<any>}
 * @constructor
 */
export function get(url, param,callback) {
    axios.get(url,{
        params: param,
        headers: {
            //存放token
            token:window.sessionStorage.getItem("myToken")||"",
        }
    }).then(function(response){
        let statusCode=response.status==200?200:-1;//请求状态：成功:200,失败:-1
        let requestParam=response.config.params||{};
        let data=response.data;
        let responseData={
            status:statusCode,//状态码
            param:requestParam,//参数对象
            returnData:data//请求响应数据
        };
        callback(responseData);
    })
}

/**
 * Post方法
 * @param url
 * @param param
 * @returns {AxiosPromise<any>}
 * @constructor
 */
export function post(url,param,callback){
    param=param||{};
    axios.post(url,param,{
        headers: {
            //存放token
            token:window.sessionStorage.getItem("myToken")||"",
        }
    }).then(function(response){
        if(response.status==200){
            let param=response.config.data?qs.parse(response.config.data):{};
            let result={
                param:param,
                text:response.request.responseText,
                data:response.data,
                status:response.status
            };
            callback(result);
        }
    })
}

/**
 * Delete方法
 * @param url
 * @param par
 * @returns {AxiosPromise}
 * @constructor
 */
export function del(url, param) {
    return axios.delete(url, {
        params: param,
        headers: {
            //  存放token
        }
    })
}

/**
 * Put方法
 * @param url
 * @param par
 * @returns {AxiosPromise<any>}
 * @constructor
 */
export function put(url, param) {
    return axios.put(url, param, {
        headers: {
            //  存放token
        }
    })
}