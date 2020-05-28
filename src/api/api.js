/*
 * 基础的网络请求工具(配置axios http请求的配置)
 */
import axios from 'axios';//http请求模块

//全局axios的请求的默认设置
//axios.defaults.baseURL = 'https://api.example.com';//配置基础路径
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


/**
 * Post方法
 * @param url
 * @param par
 * @returns {AxiosPromise<any>}
 * @constructor
 */
export function post(url, par) {
    return axios.post(url, par, {
        headers: {
            //  存放token
        }
    })
}

/**
 * Get方法
 * @param url
 * @param par
 * @returns {AxiosPromise<any>}
 * @constructor
 */
export function get(url, par) {
    return axios.get(url, {
        params: par,
        headers: {
            //  存放token
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
export function del(url, par) {
    return axios.delete(url, {
        params: par,
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
export function put(url, par) {
    return axios.put(url, par, {
        headers: {
            //  存放token
        }
    })
}