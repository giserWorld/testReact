/**************************textarea ************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

//地图组件
class textarea  extends Component{
    name="textarea";
    state={
        msg:"textarea",
        content:this.props.parent_value
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrap">
              <div>
                <textarea onChange={this.state.content}/>
              </div>
            </div>
        )
    }
    componentDidMount(){
         console.log(this.props); 
    }
}
export default textarea;
