import React ,{ Component }from 'react';
/**************************react-doc**********************
 *1.react框架采用"声明式"编写 UI
 *2.React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。
    使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”
 *3.
 **/
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index",
        }
    }
    render(){
        return(
            <div name={this.state.name}>
                <h2>{this.state.name}</h2><hr/>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default index;