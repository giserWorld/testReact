/**************************请求接口数据(跨域请求数据)************************/
import React ,{ Component }from 'react';
import axios from 'axios';//http请求模块axios
import qs from 'qs';// qs这个包在install  axios时就已经装了，因为 qs 是 axios 的依赖包
import * as api from '@/api/api';
/*******************************axios****************************
 *1. 
 * 
 * 
 */
//axios全局配置，将应用于每个请求
//axios.defaults.baseURL = 'https://api.example.com';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//post请求必须设置“application/x-www-form-urlencoded”
//axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
//axios.defaults.withCredentials = true //带cookie请求
//axios.defaults.timeout = 5000 //  请求的超时时间 5000ms
//console.log(axios.defaults);
class index extends Component{
    state={
        name:"***********api-axios*************",
        url:"http://112.74.196.156/DiseasesGISServer/wz/wz_find_Wz.action?dm=53&code_level=2",
        url_proxy:"api/DiseasesGISServer/wz/wz_find_Wz.action"
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.axios_get.bind(this)}>1.axios_get请求,路径参数</button><p/>
                <button onClick={this.axios_get_param.bind(this)}>2.axios_get_param请求,带有param对象</button><p/>
                <button onClick={this.axios_post.bind(this)}>3.axios_post请求</button><p/>
                <button onClick={this.axios_config_get.bind(this)}>4.axios_config_get请求</button><p/>
                <button onClick={this.axios_config_post.bind(this)}>5.axios_config_post请求</button><p/>
                <button onClick={this.api_get.bind(this)}>6.api_get请求</button><p/>
                <button onClick={this.api_post.bind(this)}>7.api_post请求</button><p/>
            </div>
        )
    }
    componentDidMount(){
       
    }
    //1.get请求,url参数(将参数拼写在路径中)，不支持param参数对象
    axios_get(){
        var url=this.state.url_proxy+"?dm=53&code_level=2";
        axios.get(url).then(function(result){
            console.log(result);
        })
    }
    //2.get请求,param参数对象(带有param参数对象的请求)，不支持url参数和url参数同时存在
    axios_get_param(){
        var url=this.state.url_proxy;
        var url2=this.state.url_proxy+"?dm=53&code_level=2";
        var param={
            dm:53,
            code_level:2
        };
        axios.get(url,{params:param}).then(function(result){
            console.log(result);
        })
    }
    //3.post请求,param参数对象(带有param参数对象的请求)，不支持url参数和url参数同时存在
    axios_post(){
        var url=this.state.url_proxy;
        var url2=this.state.url_proxy+"?dm=53&code_level=2";
        var param={
            dm:53,
            code_level:2
        };
        axios.post(url,qs.stringify(param)).then(function(result){
            console.log(result);
        })
    }
    //4.config get请求,支持url参数和param参数，不支持url参数和url参数同时存在
    axios_config_get(){
        var url=this.state.url_proxy;
        var url2=this.state.url_proxy+"?dm=53&code_level=2";
        var param={
            dm:53,
            code_level:2
        };
        axios({
            method:"get",
            url:url,
            params:param,
            timeout:5000//请求超时时间, 单位毫秒
        }).then(function(result){
            console.log(result);
        })
    }
    //5.post请求,param参数对象(带有param参数对象的请求)，不支持url参数和url参数同时存在
    axios_config_post(){
        var url=this.state.url_proxy;
        var url2=this.state.url_proxy+"?dm=53&code_level=2";
        var param={
            dm:53,
            code_level:2
        };
        axios({
            url:url,
            baseURL:"",//基础路径，“baseURL”将被加在url之前
            method:"post",
            timeout:5000,//请求超时时间, 单位毫秒
            //params:param,//参数作为urlParam，参数会自动拼接到url中
            //responseType:"json",//服务器将响应的数据类型,可选值：'arraybuffer'，'document'，'json'，'text'，'stream'，'blob',
            data:qs.stringify(param),//post 请求的数据,作为请求body发送数据
            withCredentials:true,//true时，发送请求会带cookie,不需要带cookie可以设置false
            headers:{//设置请求头

            },
        }).then(function(result){
            console.log(result);
        })
    }
    //6.api get请求,不支持url参数和url参数同时存在
    api_get(){
        var url=this.state.url_proxy;
        var url2=this.state.url_proxy+"?dm=53&code_level=2";
        var param={
            dm:53,
            code_level:2
        };
        api.get(url,param,function(result){
            console.log(result);
        });
    }
    //7.api请求,不支持url参数和url参数同时存在
    api_post(){
        var url=this.state.url_proxy;
        var url2=this.state.url_proxy+"?dm=53&code_level=2";
        var param={
            dm:53,
            code_level:2
        };
        api.post(url,param,function(result){
            console.log(result);
        });
    }
}
export default index;