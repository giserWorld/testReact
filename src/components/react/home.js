/**************************home组件************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类


//通过class关键字定义组件，结构更类似于vue组件结构
class home extends Component{
    name="home组件";//组件的名字
    constructor(props){
        super(props);
        this.state={
            msg:"home组件",
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.addPlus.bind(this,"ffffffff")}>按钮</button>
            </div>
        )
    }
    componentDidMount(){
       
    }
    componentWillUnmount(){

    }
    addPlus(value){
        console.log(value);
    }
    
}
export default home;