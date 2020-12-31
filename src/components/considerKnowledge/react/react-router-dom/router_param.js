import React ,{ Component }from 'react';

/*****************************router_param**********************************
 *1.params路由传参：
    1)刷新地址栏，参数依然存在 
    2)路由传参只能传字符串，并且，如果传的值太多的话，url会变得长而丑陋
 *2.search路由传参：(推荐,跟常规get请求参数类似)
    1)优缺点同params
 *3.query路由传参：
    1)传参优雅，传递参数可传对象
    2)刷新地址栏，参数丢失
 *4.state路由传参：
    1)优缺点同query
 */
class router_param extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"router_param",
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><hr/>
                <button onClick={()=>{this.getParamInfo('param')}}>获取路径参数(param)</button><p/>
                <button onClick={()=>{this.getParamInfo('search')}}>获取路径参数(search)</button><p/>
                <button onClick={()=>{this.getParamInfo('query')}}>获取路径参数(query)</button><p/>
                <button onClick={()=>{this.getParamInfo('state')}}>获取路径参数(state)</button><p/>
            </div>
        )
    }
    getParamInfo=(type)=>{
        let _self=this;
        var pathParam={};
        if(type==="param"){
           //结果为对象,例如:"{param: "name=xiaohong&id=2&code=51"}"
           pathParam=_self.props.match&&_self.props.match.params?_self.props.match.params:{};//获取路由参数
        }
        else if(type==="search"){
            //结果为字符串,例如:"?type=search",推荐
            pathParam=_self.props.location&&_self.props.location.search?_self.props.location.search:{};//获取路由参数
        }
        else if(type==="query"){
            //结果为对象,例如:"{param1: "sunny", age: "25"}"
           pathParam=_self.props.location&&_self.props.location.query?_self.props.location.query:{};//获取路由参数
        }
        else if(type==="state"){
             //结果为对象,例如:"{param1: "sunny", age: "25"}"
            pathParam=_self.props.location&&_self.props.location.state?_self.props.location.state:{};//获取路由参数
        }
        console.log("pathParam:",pathParam);
    }

    componentDidMount(){
      let _self=this;
      console.log("_self:",_self);   
    }
}
export default router_param;
