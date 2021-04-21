import React ,{ Component }from 'react';
//带有路由属性的高阶组件
import { withRouter } from "react-router";
/**************************react_withRouter(高阶组件)**********************
 *1.高阶组件是参数为组件，返回值为新组件(包裹组件)的函数
 *2.组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件
 *3.高阶组件其实就是一个函数,将一个普通组价转换为一个包裹组件
 *4.通过withRouter高阶组件可以访问history对象属性和match匹配项。当组件渲染时，
    withRouter都会将更新的match，location和history属性传递给包装的组件。
 *5.如果react组件与router路由直接有映射关系,则该组件props中会包含"history"、"location"、"match"属性
 *6.如果react组件与router路由没有直接映射关系,则该组件props中不会包含"history"、"location"、"match"属性
 *7.通过"withRouter"高阶组件可以将react组件有间接关系router路由属性添加到props中("history"、"location"、"match")
 *8.
 **/
class react_withRouter extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_withRouter",
        }
    }
    render(){
        const { match, location, history } = this.props;
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
export default withRouter(react_withRouter);