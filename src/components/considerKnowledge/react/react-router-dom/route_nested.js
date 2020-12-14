import React ,{ Component }from 'react';
import {HashRouter as Router, Route, Switch,Link} from 'react-router-dom';//hash模式路由
//import { BrowserRouter as Router,useRouteMatch,Link} from "react-router-dom";//history模式路由
import ChinaBook_withRouter from '../../../react/children/chinaBook_withRouter';
import EnglishBook from '../../../react/children/englishBook';
/*****************************嵌套路由**********************************
 *1.嵌套路由
 *2.通过包含匹配url规则和二级路由精确(包含)匹配url规则,实现多级路由的嵌套
 *****************************路由实用函数**********************************
 *1.useRouteMatch():
 */
class route_nested extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react-router_nested",
        }
    }
    render(){
        return(
            //1.配置一个测试路由器
            <Router>
                <div style={{border:"1px solid red"}}>
                  {/* 1. 路由连接 */}
                    <Link to="/test/chinaBook_withRouter">chinaBook_withRouter</Link><p/>
                    <Link to="/test/router_sec/englishBook">englishBook</Link><p/>
                </div>
                <div style={{border:"1px solid blue"}}>
                    {/* 2.配置路由url */}
                    <Switch>
                        <Route exact path="/test/chinaBook_withRouter" component={ChinaBook_withRouter}/>
                        <Route path="/test/router_sec" 
                            render={()=>{
                                return (
                                    <>
                                      <Route exact path="/test/router_sec/englishBook" component={EnglishBook}/> 
                                      <Route exact path="/test/router_sec/book" component={ChinaBook_withRouter}/>  
                                    </>
                                )
                            }}
                        />
                    </Switch>
                </div>
                
            </Router>
        )
    }
    componentDidMount(){
        //console.log("routeMatch:",this.routeMatch);
    }
}

export default route_nested;
