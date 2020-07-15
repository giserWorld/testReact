import React ,{ Component }from 'react';

/***************************componentDidUpdate*******************************
 *1.在生命周期的第一次(组件初始化)时componentDidUpdate不会被调用,首次渲染不会执行此方法
 *2.当组件html dom更新完成后触发componentDidUpdate()
 *3.子组件的render()之前执行
 */

//react组件
class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"MyComponent",
        }
    }
    //组件更新render()后触发
    componentDidUpdate(props,state){
       console.log("***********componentDidUpdate**********");
    }//e
    render(){
        console.log("***********render**********");
        return(
            <div className="wrap">
               {this.props.name}
            </div>
        )
    }
}
class componentDidUpdate extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"componentDidUpdate:",
            value:"",
        }
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
    }

    render(){
        return(
            <div className="wrap">
               <h2>{this.state.name}</h2>
               <input value={this.state.value} onChange={this.handelChange.bind(this,"value")}/><p/>
               <MyComponent name={this.state.value}/>
               <button ref="btn1">改变state</button>
            </div>
        )
    }
    componentDidMount(){
        let _self=this;
        _self.refs.btn1.onclick=function(){
            _self.setState({});
        }  
    }
}
export default componentDidUpdate;
