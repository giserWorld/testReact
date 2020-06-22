/*************************子组件**************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

//地图组件
class child_componet  extends Component{
    name="子组件";
    state={
        msg:"子组件",
        content:"textarea元素中的值"
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrap">
              <div>
                  <textarea defaultValue= {this.state.content}/>
                  <button onClick={this.child_to_parentValue.bind(this)}>子组件向父组件传值</button>
                  <button onClick={this.child_to_child.bind(this)}>子组件向兄弟组件传值</button>
              </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
    child_to_parentValue(){//子组件向父组件传值
        var val=this.state.content;
        this.props.child_useFun(val);//调用父组件传给子组件的方法
    }
    child_to_child(){//子组件向兄弟组件传值
        var val=this.state.content;
        this.props.child_useFun("兄弟组件传值65555555");//调用父组件传给子组件的方法
    }
}
export default child_componet;
