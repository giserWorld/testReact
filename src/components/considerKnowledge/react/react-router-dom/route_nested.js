import React ,{ Component }from 'react';
import {Switch,Route,Link} from "react-router-dom";
import { BrowserRouter as Router,useRouteMatch} from "react-router-dom";//history模式路由
import ChinaBook_withRouter from '../../../react/children/chinaBook_withRouter';
import EnglishBook from '../../../react/children/englishBook';
/*****************************嵌套路由**********************************
 *1.嵌套路由
 *2.
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
                    <Link to="/chinaBook_withRouter">chinaBook_withRouter</Link><p/>
                    <Link to="/englishBook">englishBook</Link><p/>
                </div>
                <div style={{border:"1px solid blue"}}>
                    {/* 2.配置路由url */}
                    <Switch>
                        <Route exact path="/chinaBook_withRouter" component={ChinaBook_withRouter}/>
                        <Route exact path="/englishBook" 
                            render={()=>{
                                return (
                                    <>
                                      <Route exact path="/chinaBook_withRouter" component={ChinaBook_withRouter}/>   
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
