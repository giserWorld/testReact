/**************************列表元素************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

class Li_list extends Component{
    state={
        name:"ddd",
        list:["li1","li2","li3"]
    }
    constructor(props){
        super(props);
    }
    List_ele=this.state.list.map((item,idex)=>{
        return <li key={item.toString()}>{item}</li>
    });
    render(){//渲染函数，当组件实例化后调用

        return(
            <div>
                <h1>欢迎</h1>
                <ul>{this.List_ele}</ul>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default Li_list;