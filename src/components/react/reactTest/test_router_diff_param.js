import React ,{ Component }from 'react';
import { withRouter } from "react-router";
/**************************test_router_diff_param**********************
 *1.同一个组件,通过路径参数不同来显示不同的数据
 *2.当组件第一次出现在页面时,只触发"componentDidMount()",不会触发"componentWillReceiveProps()"
 *3.当同一组件的路由参数发生改变时,只触发"componentWillReceiveProps()",不会触发"componentDidMount()"
   即当路由参数发生变化时,组件的props中的路由属性值会发生变化,从而触发"componentWillReceiveProps()"
 **/

class test_router_diff_param extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"test_router_diff_param",
        }
    }
    //点击函数
    clickFun=(param)=>{
        if(param==="url1"){
            let url="/reactTest?name=xiao1&type=1";
            window.location.hash=url;
        }
        else if(param==="url2"){
            let url="/reactTest?name=xiao2&type=2";
            window.location.hash=url;
        }
    }//e
    render(){
        console.log("render()");
        return(
            <div name={this.state.name}>
                <h2>{this.state.name}</h2><hr/>
                <div>
                    <h3>"参数:name=xiao1&type=1"</h3>
                    <button onClick={()=>{this.clickFun("url1")}}>路由url1</button>
                </div>
                <div>
                    <h3>"参数:name=xiao2&type=3"</h3>
                    <button onClick={()=>{this.clickFun("url2")}}>路由url2</button>
                </div>
            </div>
        )
    }
    componentWillReceiveProps(nextProp){
        console.log("componentWillReceiveProps()");
    }//e
    componentDidMount(){
        console.log("componentDidMount()");
    }//e

}
export default withRouter(test_router_diff_param);