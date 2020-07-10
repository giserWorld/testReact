import React ,{ Component }from 'react';
import ReactDOM from 'react-dom'
import { Button, Radio } from 'antd';
/**************************reactDOM_render***********************
*1.react-dom 的 package 提供了可在应用顶层使用的 DOM（DOM-specific）方法
**************************函数*************************
*1.render(element, container[, callback])
    在提供的 container 里渲染一个 React元素(jsx,react组件)，并返回对该组件的引用,该方法属于异步执行，可能返回为undefined
***************************注解*************************
*1.如果我们想在html文件中直接使用react，那我们就要用到ReactDOM.render，作用就是将jsx代码转化为HTML代码，并插入指定的dom节点中
*2.ReactDOM.render()函数为异步渲染
*/
class reactDOM_render extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"reactDOM_render",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <div ref="divCon"></div>
            </div>
        )
    }
    //纯jsx
    jsx1=()=>(
        <div>
           <span>用户名:</span>
           <span>{this.state.name}</span>
        </div>
    )
    //包含react组件的jsx
    jsx2=()=>(
        <div>
           <p>jsx包含react组件</p>
           <Child></Child>
        </div>
    )
    componentDidMount(){
        var domCom=this.refs.divCon;//dom节点
        ReactDOM.render(this.jsx2(),domCom);//将jsx解析为html代码，并插入指定的reactdom节点中
    }
}
//子组件
class Child extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
        }
    }
    render(){
        return(
            <div>
                <Button type="primary">Primary Button</Button> 
            </div>
        )
    }
    componentDidMount(){

    }
}

export default reactDOM_render;