/**************************新闻组件************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类


//通过class关键字定义组件，结构更类似于vue组件结构
//组件声明的名字，会在调试工具中进行组件显示
class NewsCom extends Component{
    state={
        name:"news组件"
    }
    constructor(props){
        super(props);
    }
    render(){//渲染函数，当组件实例化后调用
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
    componentDidMount(){
       console.log(this);
    }
    componentWillUnmount(){

    }
    addPlus(value){
        console.log(value);
    }
    
}
export default NewsCom;