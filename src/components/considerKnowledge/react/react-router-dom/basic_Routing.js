import React ,{ Component }from 'react';
import {Switch,Route,Link} from "react-router-dom";
/*****************************基础路由**********************************
 *1.<Link>标签:声明式的跳转导航链接,从路由器中去匹配需要跳转的url
 *2.<Link>标签属性to:
    1)to(url_string):通过将位置的路径名，搜索和哈希属性连接起来而创建的
        "<Link to="/courses?sort=name" />"
    2)to(url_object):属性值为一个对象({pathname:"",search:"",hash:"",state:""})，
        var url_obj={
            pathname: "/courses",//跳转路由url
            search: "?sort=name",//query parameters
            hash: "#the-hash",//一个hash值将要放到url中
            state: { fromDashboard: true }//
        };   
        "<Link to={url_obj}/>"
    to(url_function):当前位置作为参数传递给该函数的函数，该函数应以字符串或对象的形式返回位置表示形式
        "<Link to={location => ({ ...location, pathname: "/courses" })} />"
*3.<Link>标签属性target:
     该标签中添加target="_blank"属性,则react会自动打开一个新的窗口来渲染组件
 */
class react_router extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react-router",
        }
    }
    //跳转参数值
    url_obj={
        pathname: "/ant",//跳转路由url
        search: "?sort=name",//query parameters
        hash: "#the_hash",//一个hash值将要追加到url后面，例如:"http://localhost:9000/#/ant?sort=name#the_hash"
        //state: { fromDashboard: true }
    }//e
    
    //跳转参数值,location为当前url_obj
    url_function=(location)=>{//url_obj={hash: "",pathname: "/test",search: "",state: undefined}
        return {
            pathname: "/ant",//跳转路由url
            search: "?sort=name",//query parameters
            hash: "#the_hash",//一个hash值将要追加到url后面，例如:"http://localhost:9000/#/ant?sort=name#the_hash"
            //state: { fromDashboard: true }
        }
    }//e
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
                <div>
                    <Link to="/index">路由跳转url(url_string)</Link><p/>
                    <Link to={this.url_obj}>路由跳转url(url_obj)</Link><p/>
                    <Link to={this.url_function}>路由跳转url(url_function)</Link><p/>
                    <Link to="/index?demo=addLayer" target="_blank">路由跳转url(新窗口)</Link><p/>
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default react_router;
