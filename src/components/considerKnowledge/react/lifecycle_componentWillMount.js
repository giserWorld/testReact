import React ,{ Component }from 'react';

/***************************componentWillMount(将废弃)*******************************
 *1.在生命周期的第一次(组件初始化)时调用componentWillMount()函数
 *2.componentWillMount:将要装载，在render之前调用,constructor之后
 *3.componentDidMount:装载完成，在render之后调用
 *4.react 17 componentWillMount函数将要废弃,在React 17.x中，仅UNSAFE_名称将起作用
 *5.“UNSAFE_componentWillMount”可在非严格模式下禁止显示此警告
 */

class componentWillMount extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"componentWillMount:",
            value:"",
        }
        console.log("组件构造函数:constructor()");
    }

    /*******************处理值改变函数******************
    *参数:name(String):表单元素绑定的状态属性
    ******evt(Event):"onChange"触发的事件对象
    *注解:
    *1.html元素、react组件绑定状态属性(单向、双向绑定属性方法),
    */
    handelChange(name,evt){
        let key=name || "";
        let value=evt.target.value || "";//表单值
        let state={};
        if(key)state[key]=value;
        if(key)this.setState(state);
        //console.log(state);
    }//e

    render(){
        console.log("组件渲染:render()");
        return(
            <div className="wrap">
               <h2>{this.state.name}</h2>
            </div>
        )
    }
    //废弃使用
    // componentWillMount(){
    //     console.log("组件安装前:componentWillMount()");
    // }

    //非严格模式下禁止显示此警告,在React 17.x中，仅UNSAFE_名称将起作用
    UNSAFE_componentWillMount(){
        console.log("组件安装前:UNSAFE_componentWillMount()");
    }//e
    //组件安装完成后回调
    componentDidMount(){
        let _self=this;
        console.log("组件安装后:componentDidMount()");
    }
}
export default componentWillMount;
