import React ,{ Component }from 'react';
//import {EventEmitter} from 'events';//事件总线机制(react内置模块)
import bus from './customPlugins/eventBus';//导入事件总线对象
import Child_EventEmitter from './children/child_EventEmitter';

/**************************EventEmitter自定义事件**********************
 *1.通过EventEmitter对象添的监听事件是全局事件,在应用的任何位置都可以触发该事件(除非移除事件的监听)
 *2.react框架内部包含了events模块,所以不需要另外的安装包
 *3.每一个EventEmitter()实例对象都是全局事件总线的对象,可访问所有添加的监听
 *4.应用场景:
    1)可用于react中兄弟组件中的通信
 **/
class react_EventEmitter extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_EventEmitter",
        }
    }
    clickFun=(type)=>{
        let state=null;
        if(type==="组件内部触发自定义事件"){
            let data={
                name:"自定义事件",
                data:"数据"
            };
            bus.emit('myEvent_info',data);//组件内部触发自定义事件
        }
        else if(type==="移除所有的事件监听"){
            bus.removeAllListeners();//事件总线中的所有的事件监听
            state={};
        }
        this.setState(state);
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <button onClick={()=>{this.clickFun("组件内部触发自定义事件")}}>组件内部触发自定义事件</button><p/>
                <button onClick={()=>{this.clickFun("移除所有的事件监听")}}>移除所有的事件监听</button><p/>
                <div>
                    <Child_EventEmitter/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //添加全局监听事件
        bus.addListener('myEvent_info',(data)=>{
            console.log("myEvent_info",data);
        });
        console.log("react_EventEmitter:",bus);
    }
    //组件将要卸载(移除)
    componentWillUnmount() {
        bus.removeAllListeners();//移除该事件路线上的所有事件的监听
        console.log("bus:",bus);
    }
}

export default react_EventEmitter;