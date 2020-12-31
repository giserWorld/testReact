import React ,{ Component }from 'react';
import { withRouter } from "react-router";
import {Link} from "react-router-dom";//跳转链接

/**************************router_link**********************
 *1.search路由传参：(推荐,跟常规get请求参数类似)
 **/
class router_link extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"router_link",
        }
    }
    render(){
        return(
            <div name={this.state.name}>
                <h2>{this.state.name}</h2><hr/>
                {/* 1.路由跳转-params传值 */}
                <h3>1.pathname+param</h3>
                <Link to="/router_param/name=xiaohong&id=2&code=51">1.1-link_router1(param)</Link><p/>{/* link跳转 */}
                <button onClick={()=>{this.clickFun('router_param')}}>1.2-btn_router1(param)</button><p/>{/* js跳转 */}
                
                {/* 2.路由跳转-search传值(推荐) */}
                <h3>2.pathname+search</h3>
                <Link to="/router_search?type=search">2.1-link_router1(search)</Link><p/>{/* link跳转 */}
                <button onClick={()=>{this.clickFun('router_search')}}>2.2-btn_router1(search)</button><p/>{/* js跳转 */}

                {/* 3.路由跳转-query传值 */}
                <h3>3.pathname+query</h3>
                <Link to={{pathname:'/router_query',query:{param1:'sunny',age:"25"}}}>3.1-link_router1(query)</Link><p/>{/* link跳转 */}
                <button onClick={()=>{this.clickFun('router_query')}}>3.2-btn_router1(query)</button><p/>{/* js跳转 */}

                {/* 4.路由跳转-state传值 */}
                <h3>4.pathname+state</h3>
                <Link to={{pathname:'/router_state',state:{type:'state',age:"25"}}}>4.1-link_router1(state)</Link><p/>{/* link跳转 */}
                <button onClick={()=>{this.clickFun('router_state')}}>4.2-btn_router1(state)</button><p/>{/* js跳转 */}

                {/* 5.原生js地址跳转 */}
                <h3>5.window.location</h3>
                <button onClick={()=>{this.clickFun('router_js')}}>5.1-btn_router1(js)</button><p/>
                <h3>6.自定义路由跳转</h3>
                <button onClick={()=>{this.clickFun('router_custom')}}>5.1-btn_customRouter(js)</button><p/>
            </div>
        )
    }
    //点击路由跳转函数
    clickFun=(type)=>{
        let _self=this;
        if(type=="router_param"){
            //1.js动态路由跳转
            var paramStr="name=xiaohong&id=2&code=51";
            _self.props.history.push({pathname:"/router_param/"+paramStr});
        }
        else if(type=="router_search"){
            //2.js动态路由跳转(pathname + search),推荐
            var paramStr="type=search&name=xiaowang";
            this.props.history.push({pathname:"/router_search",search:paramStr});
        }
        else if(type=="router_query"){
            //3.js动态路由跳转
            this.props.history.push({pathname:"/router_query",query:{param1:'sunny',age:"25"}});
        }
        else if(type=="router_state"){
            //4.js动态路由跳转(pathname + state)
            this.props.history.push({pathname:"/router_state",state:{type:'state',age:"25"}});
        }
        else if(type=="router_js"){
            //5.js动态路由跳转,拼接search参数
            window.location.hash='/router_search?a=1';
        }
        else if(type=="router_custom"){
            let url="/router_search?type=search&name=xiaowang";
            let url2="/router_search/?type=search&name=xiaowang";
            let url3="/router_search";
            let paramStr="type=search&name=xiaowang";
            this.props.history.push({pathname:url});
            //this.props.history.push({pathname:url3,search:paramStr});
        }
    }//e
    componentDidMount(){
       
    }
}
export default withRouter(router_link);