import React ,{ Component }from 'react';

/***************************componentWillUnmount*******************************
 *1.componentWillUnmount:当组件从dom树种移除后时执行(即组件卸载)
 */

//react组件
class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"MyComponent",
        }
    }
    //组件移除后触发
    componentWillUnmount(){
       console.log("***********componentWillUnmount**********");
    }//e
    render(){
        console.log("***********render**********");
        return(
            <div className="wrap">
               {this.state.name}
               
            </div>
        )
    }
}
class componentWillUnmount extends Component{
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
               {
                this.status?
                <MyComponent name={this.state.value}/>:""
               }
               <button ref="btn1">改变state</button>
            </div>
        )
    }
    componentDidMount(){
        let _self=this;
        this.status=true;
        _self.refs.btn1.onclick=function(){
            _self.status=!_self.status;
            _self.setState({});
        }  
    }
}
export default componentWillUnmount;
