import React ,{ Component }from 'react';
/**************************react_setState()**********************
 *1.react 想要更新视图只能用setState()方法
 *2.setState()状态更新是异步的
 *3.React可以将多个setState() 调用合并成一个调用来提高性能
 *4.通过setState()传入一个函数,这种用法用在你改变的值，借助于原有的state里的默认数据
 *5.setState()第一个参数可选值:
    1)对象参数
    2)函数参数
 **/
class react_setState extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_setState",
            state_object:"setState对象",
            state_fun:"setState函数",
        }
    }
    //点击函数
    clickFun=(type)=>{
        let state=null;
        if(type==="setState对象"){
            state={state_object:"state_object更新了！"}
        }
        else if(type==="setState函数"){
            state=(oldState)=>{
                return {
                    state_fun:oldState.state_fun+":"+"state_fun更新了！" 
                }
            }
        }
        this.setState(state);
    }//e

    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <div>
                    <p>{this.state.state_object}</p>
                    <button onClick={()=>{this.clickFun("setState对象")}}>setState对象</button>
                </div>
                <div>
                    <p>{this.state.state_fun}</p>
                    <button onClick={()=>{this.clickFun("setState函数")}}>setState函数</button>
                </div>
            </div>
        )
    }
}
export default react_setState;