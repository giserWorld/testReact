import React ,{ Component }from 'react';

/**************************ReactDOM-render**********************
 *1.ReactDOM.render(element, container[, callback]):在提供的 container 里渲染一个 React 元素
 *2.首次调用时，容器节点里的所有 DOM 元素都会被替换，后续的调用则会使用 React 的 DOM 差分算法（DOM diffing algorithm）进行高效的更新
 **/
class react_api_render extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_api_render",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <p>
                    {location.pathname}
                </p>
            </div>
        )
    }
    componentDidMount(){
        console.log("props:",this.props);
    }
}
export default react_api_render;