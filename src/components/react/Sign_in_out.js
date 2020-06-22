/**************************新闻组件************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

class Sign_in_out extends Component{
    state={
        name:"ddd",
    }
    constructor(props){
        super(props);
    }
    render(){//渲染函数，当组件实例化后调用
        var signStatus=this.props.signStatus || "";
        //条件渲染
        if(signStatus){
            return(
                <div>
                    <h1>欢迎</h1>
                    <button onClick={this.in_out.bind(this,false)}>退出</button>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1>请登录</h1>
                    <button onClick={this.in_out.bind(this,true)}>登录</button>
                </div>
            )
        }
    }
    componentDidMount(){
       console.log(this);
    }
    componentWillUnmount(){

    } 
    in_out(status){
        this.props.change_sign_zt(status);
    }
}
export default Sign_in_out;