import React ,{ Component }from 'react';
import { Modal, Button } from 'antd';
import React_list_ele from './react_list_ele';
/*****************************props_children属性**********************************
 *1.如果组件标签内部有内容，则组件内容则会转为该组件props.children中
    例如:"<Child_component1><React_list_ele/></Child_component1>",Child_component1组件中包含React_list_ele组件
    则React_list_ele组件会作为Child_component1组件的props.children(子节点)
 */
class props_children extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"props_children",
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><hr/>
                <Child_component1>
                    <React_list_ele/>
                </Child_component1>
            </div>
        )
    }
    componentDidMount(){
          
    }
}

//子组件图标事件
class Child_component1 extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"charts图表",
            visible:false
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
                {this.props.children}
                <button onClick={this.showModel}>显示弹框</button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.modelCloseFun}
                    onCancel={this.modelCloseFun}
                    >
                   {this.props.children}
                </Modal>
            </div>
        )
    }
    modelCloseFun=()=>{
        let _self=this;
        this.setState({
            visible:false
        });
    }
    showModel=()=>{
        let _self=this;
        this.setState({
            visible:true
        });
        console.log(this);
    }
    componentDidMount(){
        let _self=this;
        console.log("_self.props.children:",_self); 
    }
}

export default props_children;
