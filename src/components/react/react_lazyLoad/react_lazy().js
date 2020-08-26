import React ,{ Component,Suspense }from 'react';
/**************************react_lazy()**********************
 *1.React.lazy 和 Suspense 技术还不支持服务端渲染
 *2.React.lazy 函数能让你像渲染常规组件一样处理动态引入（的组件）
 *3.当组件需要在页面渲染时，自动导入包含该组件的包(按需加载,不会一次性全部加载)
 *4.React.lazy()懒加载的组件必须是default export 导出的 React 组件,不可以是export导出组件
 *5.通过在Suspense 组件中渲染 lazy 组件
 *6.Suspense 组件置于懒加载组件之上的任何位置。也可以用一个 Suspense 组件包裹多个懒加载组件
 *7.React.lazy 目前只支持默认导出（default exports）
 *8.比较繁琐
 **/

//懒加载导入组件
const HomeComponent = React.lazy(()=>import('./test_home'));
class react_lazy extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_lazy",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <Suspense fallback={<div>加载过程中显示的组件...</div>}>
                    <HomeComponent/>
                </Suspense>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default react_lazy;