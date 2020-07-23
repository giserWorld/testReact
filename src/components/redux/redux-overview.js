import React ,{ Component }from 'react';
/**************************redux***********************
 *1.Redux 是 JavaScript 状态容器，提供可预测化的状态管理
 *2.通过"connect()"函数创建"容器组件"
 *3.使用 connect()前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中
*/
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default index;