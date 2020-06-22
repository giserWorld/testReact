/*************************子组件**************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

//地图组件
class child_componet  extends Component{
    name="子组件";
    state={
        msg:"子组件",
        content:this.props.child_value
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrap">
              <div>
                  <span style={{color:"red"}}>{this.props.child_value}</span>
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
}
export default child_componet;
