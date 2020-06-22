/**************************请求接口数据(跨域请求数据)************************/
import React ,{ Component }from 'react';

import * as api from '@/api/api';
import BackendURL from '@/api/BackendURL';


class Com extends Component{
    state={
        name:"****ajax请求数据(跨域请求数据)****",
        url:"http://112.74.196.156/DiseasesGISServer/wz/wz_find_Wz.action?dm=53&code_level=2",
        url2:"http://d.l-try.com:8080/ly/TqUQrCz/getCzExceptionTotal.lt",
        url_proxy:"/api/DiseasesGISServer/wz/wz_find_Wz.action",
        url_proxy2:"/apc/YLZRBHQGISServer/Intro/getIntro.action",
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.requiestData.bind(this)}>1.直接请求(fetch get,报错跨域)</button><p/>
                <button onClick={this.requiestData2.bind(this)}>2.直接请求(axios post,no token，没有token与跨域请求没有关系，只是请求数据失败)</button><p/>
                <button onClick={this.requiestData3.bind(this)}>3.直接请求(axios post,token，没有token与跨域请求没有关系，只是请求数据失败)</button><p/>
                <button onClick={this.ajaxRequest.bind(this)}>4.配置虚拟代理服务器(fetch get)</button><p/>
                <button onClick={this.ajaxRequest2.bind(this)}>5.配置虚拟代理服务器(axios get)</button><p/>
                <button onClick={this.ajaxRequest3.bind(this)}>6.配置虚拟代理服务器(axios post)</button><p/>
            </div>
        )
    }
    componentDidMount(){
       
    }
    //fetch get请求
    requiestData(){
        var _self=this;
        fetch(_self.state.url).then(response=>response.text()).then(function(result){
            console.log(result);
        }); 
    }
    //axios post请求,no token
    requiestData2(){
        var _self=this;
        var param={
          
        };
        api.post(_self.state.url2,param,function(result){
            console.log(result);
        });
    }
    //axios post请求,token
    requiestData3(){
        var _self=this;
        var param={
          
        };
        api.post(_self.state.url2,param,function(result){
            console.log(result);
        });
    }
    //1.通过配置虚拟代理服务器，解决跨域问题(fetch get,使用代理路径,请求路径不需要http)
    ajaxRequest(){
        var _self=this;
        var url=_self.state.url_proxy+"?dm=53&code_level=2";
        fetch(url).then(response=>response.json()).then(function(result){
            console.log(result);
        });
    }
    //2.通过配置虚拟代理服务器，解决跨域问题(axios get,使用代理路径,请求路径不需要http)
    ajaxRequest2(){
        var _self=this;
        var param={
            dm:53,
            code_level:2
        };
        api.get(_self.state.url_proxy,param,function(result){
            console.log(result);
        });
    }
    //3.通过配置虚拟代理服务器，解决跨域问题(axios post,使用代理路径,请求路径不需要http)
    ajaxRequest3(){
        var _self=this;
        var param={
            dm:53,
            code_level:2
        };
        api.post(BackendURL.testApi1,param,function(result){
            console.log(result);
        });
    }
    
}
export default Com;