import React ,{ Component }from 'react';

/***************************componentWillReceiveProps*******************************
 *1.当父组件render执行时，子组件会触发componentWillReceiveProps函数(不管子组件的props属性值改变与否)
 *2.子组件的render函数执行前通过componentWillReceiveProps函数获取新的props，从而更新子组件自己的state
 *3.子组件的render()之前执行
 *4.使用方法:
    Component{
        componentWillReceiveProps(nextProps){
            if (nextProps.email !== this.props.email) {
                this.setState({ email: nextProps.email });
            }
        }
    }
 *5.子组件的"props"发生变化时不会重新触发"componentDidMount"
 */

//react组件
class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"MyComponent",
        }
    }
    //props值发生改变时触发(render函数之前),nextProps为将要接受的新props
    componentWillReceiveProps(nextProps){
       let _self=this;

       console.log("***********currentProps**********");
       console.log(_self.props);//当前props
       console.log("***********nextProps**********");
       console.log(nextProps);//将要接受的新props
    }
    render(){
        console.log("***********子组件render**********");
        return(
            <div className="wrap">
               {this.props.name}
            </div>
        )
    }
    componentDidMount(){
        console.log("***********子组件componentDidMount**********");
    }
}
class componentWillReceiveProps extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"componentWillReceiveProps:",
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
export default componentWillReceiveProps;
