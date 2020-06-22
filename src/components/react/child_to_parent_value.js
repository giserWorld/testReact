/************************子组件向父组件传值*************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

import Child_com from './child_component';
//地图组件
class textarea  extends Component{
    name="textarea";
    state={
        msg:"textarea",
        content:"这是父组件值"
    }
    constructor(props){
        super(props);
    }
    child_useFun(text){
        this.setState({
            content:text
        });
    }
    render(){
        return(
            <div className="wrap">
              <div>
                <h4>{this.state.content}</h4>
                 {/* 改变child_useFun函数中this的指针对象 */}
                <Child_com child_useFun={this.child_useFun.bind(this)}></Child_com>
              </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default textarea;
