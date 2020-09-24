import React ,{ Component }from 'react';
import Child_mathBook from './children/child_mathBook';
/**************************react_createContext()**********************
 *1.React.createContext属于React的高级API
 *2.当你不想在组件树中通过逐层传递 props 或者 state 方法来传递数据时，可以使用Context来实现跨层级的组件数据传递
 *3.如果要Context发挥作用，需要用到两种组件，一个是Context生产者(Provider)，通常是一个父节点，另外是一个Context的消费者(Consumer)，
    通常是一个或者多个子节点。所以Context的使用基于生产者消费者模式
 *4.React.createContext(defaultValue):
    创建一个context对象。组件会向组件所处的树中距离最近的那个Provider进行匹配context
    当组件所处的树没有匹配到Provider (不使用Provider组件) 时，defaultValue参数才会生效
  *5.使用一个 Provider 来将当前的 theme 传递给以下的组件树,无论多深，任何组件都能读取这个值,中间的组件再也不必指明往下传递 theme
  *6.Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据
  *7.当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，
     因此当 consumer 组件在其祖先组件退出更新的情况下也能更新
  *8.Class.contextType属性
     挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值
  *9.可以使用 public class fields 的 static 这个类属性来初始化你的 contextType
  *10.使用Context，可以跨越组件进行数据传递
  *11.通过静态方法React.createContext()创建一个Context对象，这个Context对象包含两个组件，<Provider />和<Consumer />
  *12.
  **/

 //创建一个context对象(向下兼容的环境对象)
const MyContext = React.createContext({//初始化环境数据
    background: 'red',
    color: 'white'
});
console.log("MyContext对象:",MyContext);

class react_createContext extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_createContext",
        }
    }
    render(){
        return(
            //使用一个 Provider 来将当前的 theme 传递给以下的组件树,无论多深，任何组件都能读取这个值
            <MyContext.Provider value={{something: 'something'}}>
                 <h2>{this.state.name}</h2><hr/>
                <Child_mathBook/>
            </MyContext.Provider>
        )
    }
    componentDidMount(){

        console.log("react_createContext:",this);
        //console.log("react_lib:",React);
    }
}
export default react_createContext;