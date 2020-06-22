/**************************条件渲染************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

import Sign_in_out from './Sign_in_out';

class If_render extends Component{
    state={
        name:"条件渲染",
        showStatus:true,
    }
    constructor(props){
        super(props);
    }
    change_sign_zt(status){
       this.setState({
            signStatus:status
       });
    }
    render(){//渲染函数，当组件实例化后调用
        return(
            <div className="wrap">
                <div>
                     <h1>{this.state.name}</h1>
                </div>
                <div>
                     {//正则表达式
                         this.state.showStatus?
                         <div>状态为true</div>:
                         <span style={{color:"red"}}>状态为false</span>
                     }
                </div>
                <button onClick={this.changeStatus.bind(this)}>改变状态</button>
            </div>
        )
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    changeStatus(){
       this.setState({
         showStatus:!this.state.showStatus
       });
    }
    
}
export default If_render;