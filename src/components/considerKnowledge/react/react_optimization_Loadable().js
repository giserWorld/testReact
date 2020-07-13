import React ,{ Component }from 'react';
import { Suspense }from 'react';
//import loadable from '../../../utils/loadable';//动态导入组件
import loadable from '@loadable/component';//代码分割库

/*****************************代码分割**********************************
 *1.React 项目打包时，如果不进行异步组件的处理，那么所有页面所需要的 js 都在同一文件中（bundle.js），整个js文件很大，从而导致首屏加载时间过长。
 *2.代码分割就是将包含整个应用的一个大模块，分割成包含应用各个独立部分的许多小模块。webpack这样的工具内置了这样的功能，
 而React Loadable是为了使其更简单实现而诞生的。
 *3.代码分割类型:
    1)基于路由拆分
    2)基于组件拆分
 *4.常用的代码分割lib(动态加载组件)：
    1)react-loadable(不进行维护)
      <1>react-loadable是一个在react应用是使用非常简单的轻量级的代码分割组件库,对组件进行异步加载处理，通常可以使用 React-loadable
    2)React.lazy(官方)
        React.lazy() 允许你定义动态加载的组件。 这有助于减少包大小，以延迟加载在初始渲染期间未使用的组件,
        渲染 lazy 组件要求渲染树中有一个 <React.Suspense> 组件
    3)loadable-components(推荐,功能强大)
      懒加载用 loadable-components 代替 react-loadable
 */
//const Form_element=loadable(() => import('./form_element'));//统一"React-loadable"异步加载组件
//const Form_element=React.lazy(() => import('./form_element'));//React.lazy(),不推荐
const Form_element=loadable(() => import('./form_element'));//推荐
class reactLoadable extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"代码分割",
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><hr/>
                {/* 1.loadable异步加载 */}
                <Form_element/>

                {/* 2.React.lazy()异步加载 */}
                {/* <Suspense fallback={<div>Loading...</div>}>
                    <Form_element />
                </Suspense> */}
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default reactLoadable;
