import React ,{ Component }from 'react';
//导入react-loadable组件
import Loadable from 'react-loadable';
import Loading from './loading/index';
/**************************react-loadable**********************
 *1.react-loadable是一个高效地实现react懒加载的第三方插件
 *2.代码拆分是将包含整个应用程序的一个大捆绑包分成多个较小的捆绑包的过程
 *3.代码拆分类型:
    1)基于组件的拆分
    2)基于路由的拆分
 *4.支持客户端、服务器端
 *5.使用相对简单
 **/

const Loadable_test_home = Loadable({
    loader:() => import('./test_home'),//懒加载的组件
    loading:Loading,//过程加载组件
    delay:300,//[opt] 延迟加载Loading组件时间,0.3 seconds,默认为200ms
    timeout:10000,//[opt] loader加载超时时间为10 seconds
});
class react_loadable extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_loadable",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <Loadable_test_home/>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default react_loadable;