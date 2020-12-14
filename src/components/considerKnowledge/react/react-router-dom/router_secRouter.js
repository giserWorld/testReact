import React ,{ Component }from 'react';
import { withRouter } from "react-router";//带有路由属性的高阶组件
import SecRouter from "../../../../router/secRouter";
/*****************************二级路由**********************************
 *1.一级路由包含匹配url,二级路由精确(包含)匹配url
 */
//route:"/test" --- 一级路由页面
class router_secRouter extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"二级路由配置",
        }
    }
    render(){
        return(
            <div className="wrap">
                <div className="head">
                    {this.state.name}
                </div>
                <div className="content" style={{border:"1px solid red"}}>
                    <SecRouter/>
                </div>
            </div>
        )
    }
}

export default router_secRouter;
