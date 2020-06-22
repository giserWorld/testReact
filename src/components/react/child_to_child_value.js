/***********************兄弟组件之间传值**************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

import Child_com from './child_component';
import Child_com2 from './child_component2';
//地图组件
class textarea  extends Component{
    name="textarea";
    state={
        msg:"textarea",
        content:"兄弟组件传值",
        child_value:"",
    }
    constructor(props){
        super(props);
    }
    child_midFun(text){//兄弟组件传递数据的中间函数
        this.setState({
            child_value:text
        });
    }
    render(){
        return(
            <div className="wrap">
              <div>
                <h4>{this.state.content}</h4>
                 <Child_com2 child_useFun={this.child_midFun.bind(this)} child_value={this.state.child_value}></Child_com2>
                 <Child_com child_useFun={this.child_midFun.bind(this)}></Child_com>
              </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default textarea;
