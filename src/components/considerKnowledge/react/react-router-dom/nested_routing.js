import React ,{ Component }from 'react';
import {Switch,Route,Link} from "react-router-dom";
import { 
    BrowserRouter as Router,//history模式路由
    useRouteMatch,
} from "react-router-dom";
/*****************************嵌套路由**********************************
 *1.嵌套路由:一个路由组件中又包含一个路由器
 *2.
 *****************************路由实用函数**********************************
 *1.useRouteMatch():
 */
class react_router_nested extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react-router_nested",
        }
    }
    render(){
        return(
            // 配置一个路由器
            <Router>
                <div style={{border:"1px solid red"}}>
                    <Link to="/home">Home</Link><p/>
                    <Link to="/users">users</Link><p/>
                </div>
                <div style={{border:"1px solid blue"}}>
                    {/* 配置路由url */}
                    <Switch>
                        <Route exact path="/users" component={usersComponent}/>
                        <Route exact path="/home" component={homeComponent}/>
                    </Switch>
                </div>
                
            </Router>
        )
    }
    componentDidMount(){
        //console.log("routeMatch:",this.routeMatch);
    }
}
//react component

class usersComponent extends Component{
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

class homeComponent extends Component{
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

export default react_router_nested;
