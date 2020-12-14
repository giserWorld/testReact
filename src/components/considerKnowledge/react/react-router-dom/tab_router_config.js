import React ,{ Component }from 'react';
//import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';//hash模式路由
import { BrowserRouter as Router, Route, Switch,Redirect, Link} from "react-router-dom";//history模式路由

/*****************************router文档**********************************
 *1.<Route>标签属性：
    1)path(String):路由匹配地址
    2)component(Component):路径匹配对应的渲染的react组件
    3)render(function):路径匹配对应的渲染回调函数,可取代component属性,render函数返回值为jsx类型
  *2.<Redirect>标签:路由重定向,路径无法匹配时,系统会自动跳转到路由
  *3.<Switch>标签:它专门匹配一条路由<Route>,匹配到便不会再向下匹配 
*/
class router_config extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index",
        }
    }
    render(){
        return(
            <Router>{/*配置一个嵌套路由器*/}
                <div style={{border:"1px solid red",margin:"10px 0px"}}>
                    <Link to="/test/home2">Home</Link><p/>
                    <Link to="/test/users2">users2路由</Link><p/>
                    <Link to="/test/other">路由重定向</Link><p/>
                </div>
                <div style={{border:"1px solid blue"}}>
                    <Switch>
                        {/* 1.path、component路由 */}
                        <Route exact path="/test/home2" component={HomeComponent}/>
                        {/* 2.path、render路由 */}
                        <Route exact path="/test/users2" render={()=>{return <UsersComponent/>}}/>
                        <Route exact path="/test/noRouter" component={RedirectCom}/>
                        {/* 3.路由重定向 */}
                        <Redirect to="#/test/noRouter" />
                    </Switch>
                </div>
            </Router>
        )
    }
}//e
class UsersComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"users组件",
        }
    }
    render(){
        return(
            <div>{this.state.name}</div>
        );
    }
}//c

class HomeComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"home组件",
        }
    }
    render(){
        return(
            <div>{this.state.name}</div>
        );
    }
}//c

class RedirectCom extends Component{
    render(){
        return(
            <div>路由重定向</div>
        );
    }
}//c
export default router_config;
