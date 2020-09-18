import React ,{ Component }from 'react';
import {EventEmitter} from 'events';//事件总线机制(react内置模块)
/**************************EventEmitter自定义事件**********************
 *1.通过EventEmitter对象添的监听事件是全局事件,在应用的任何位置都可以触发该事件(除非移除事件的监听)
 *2.react框架内部包含了events模块,所以不需要另外的安装包
 *3.每一个EventEmitter()实例对象就是一个独立的事件路线,该事件路线上可以添加需要监听的事件，并且监听事件可以全局触发
 **/
let bus=new EventEmitter();
class react_EventEmitter extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_EventEmitter",
        }
    }
    clickFun=()=>{
        let data={
            name:"自定义事件",
            data:"数据"
        };
        bus.emit('myEvent_info',data);//组件内部触发自定义事件
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <button onClick={this.clickFun}>组件内部触发自定义事件</button>
                <div>
                    <Child_book/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //自定义事件监听
        bus.addListener('myEvent_info',(data)=>{
            console.log("myEvent_info",data);
        });
        console.log("bus:",bus);
    }
    componentWillUnmount() {
        bus.removeAllListeners();//移除该事件路线上的所有事件的监听
        console.log("bus:",bus);
    }
}

class Child_book extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Child_book",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <button onClick={this.clickFun2}>子组件触发自定义事件</button>
            </div>
        )
    }
    clickFun2=()=>{
        let data={
            name:"组件外部触发自定义事件",
            data:"数据"
        };
        bus.emit('myEvent_info',data);//组件外部触发自定义事件
    }
}//e
export default react_EventEmitter;