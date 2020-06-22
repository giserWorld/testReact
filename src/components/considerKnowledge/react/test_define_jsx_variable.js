import React,{ Component }from 'react';
/********************创建jsx组件属性*********************
*1.使用静态jsx(jsx中只能使用html代码,不能使用使用js代码),直接写入jsx
*2.使用动态jsx(jsx中可以使用使用js代码),动态jsx通过函数的方式返回jsx(推荐)
**/
class jsxAttr extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"jsx组件属性:",
            type:"2"
        }
    }
    //1.静态jsx(jsx中不能使用使用js代码,否则报错)
    jsx_static=(
        <div>
            {/* <div>{this.state.name}</div> */}{/* 报错 */}
            <span>静态jsx</span>{/* 不报错 */}
        </div>
    );
    //2.动态jsx(jsx中可以使用使用js代码,推荐)
    jsx_dynamic=()=>{
        return (
            <div>
                <div>{this.state.name}</div>{/* 不报错 */}
                <span>动态jsx</span>{/* 不报错 */}
            </div>
        );
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                {this.state.type=="1"?this.jsx_static:this.jsx_dynamic()}
            </div>
        )
    }
    componentDidMount(){

    }
}
export default jsxAttr;