import React ,{ Component }from 'react';
import bus from '../customPlugins/modulesES6/eventBus';//导入事件总线对象
/**************************EventEmitter自定义事件**********************
 *
 **/

class child_EventEmitter extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"child_EventEmitter",
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
    componentDidMount(){
        console.log("child_EventEmitter:",bus);
    }
    componentWillReceiveProps(nextProps){
        console.log("child_EventEmitter:",bus);
    }
}//e
export default child_EventEmitter;