/**************************class组件************************/
import React ,{ Component }from 'react';


//通过class关键字定义组件，结构更类似于vue组件结构
class Component_class extends Component{
    //当浏览器加载该组件时，该组件就会被实例化，该组件实例化时调用
    constructor(props){//构造函数props组件传的值
        super(props);
        this.state={
            name:"class组件",
        }
    }
    render(){
        return(
            <div>
                <h1>你好，新闻组件,{this.state.name}</h1>
                <button onClick={this.changeValue}>改变值</button>
            </div>
        )
    }
    componentDidMount(){//组件挂载在dom节点容器上时触发
       
    }
    componentWillUnmount() {//组件从 DOM 中被移除，React 就会调用 componentWillUnmount()方法

    }
    changeValue=()=>{//通过类属性赋值函数的方法绑定this类实例
        this.setState({//改变数据对象属性值
            name:"66666666"
        });
    }
}
export default Component_class;