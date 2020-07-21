import React ,{ Component }from 'react';

/***************************componentDidUpdate*******************************
 *1.在生命周期的第一次(组件初始化)时componentDidUpdate不会被调用,首次渲染不会执行此方法
 *2.当组件html dom更新完成后触发componentDidUpdate()
 *3.当前组件更新render()之后执行,子组件的render()之前执行
 *4.每次组件更新后触发
 */
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
    }//e
    change_input=()=>{
        this.setState({
            value:"ddddddddd"
        });
    }
    render(){
        console.log("组件render:render()");
        return(
            <div className="wrap">
               <h2>{this.state.name}</h2>
               <input value={this.state.value} onChange={this.handelChange.bind(this,"value")}/><p/>
               <button ref="btn1" onClick={this.change_input}>改变state属性</button>
            </div>
        )
    }
    //组件安装完成后触发
    componentDidMount(){
        let _self=this;
        console.log("组件安装完成后:componentDidMount()");
    }//e
    
    //组件更新完成后触发
    componentDidUpdate(prevProps, prevState){
        let _self=this;
        console.log("******************组件更新完成后:componentDidUpdate()****************");
        console.log("上一次组件属性prevProps:",prevProps);//上一次组件Props
        console.log("上一次组件状态prevState:",prevState);//上一次组件State
        console.log("当前组件属性currentProps:",this.props);//当前组件props
        console.log("当前组件状态currentState:",this.state);//当前组件state
        console.log("******************end*****************");
    }//e
}
export default componentDidUpdate;
