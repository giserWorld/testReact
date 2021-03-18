/*************************react生命周期函数************************/
import React ,{ Component }from 'react';
//import { Redirect } from 'react-router-dom';
/******************************react生命周期函数**********************************
 *1.constructor():组件实例化时调用
 *  1)在 constructor() 函数中不要调用 setState() 方法
 *  2)只能在构造函数中直接为 this.state 赋值。
 *  3)如需在其他方法中赋值，你应使用 this.setState() 替代。
 *2.render():组件渲染时调用
 *  1)render() 方法是 class 组件中唯一必须实现的方法。
 *3.componentDidMount():react将渲染dom节点插入 DOM 树中后调用，即dom树修改更新完成
 *4.shouldComponentUpdate(nextProps, nextState)
 *  1)当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用
 *  2)首次渲染或使用 forceUpdate() 时不会调用该方法。
 *  3)当shouldComponentUpdate()方法返回true时，render()才会更新调用，false时render()不会调用
 *  4)shouldComponentUpdate()是用来判断组件是否应该更新
 *5.getSnapshotBeforeUpdate(prevProps, prevState)
 *  1)此生命周期的任何返回值将作为参数传递给 componentDidUpdate()
 *6.componentDidUpdate(prevProps, prevState, snapshot)
 *  1)componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法
 *  2)如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），
 ***则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递
 *  3)如果 shouldComponentUpdate() 返回值为 false，则不会调用 componentDidUpdate()
 *7.componentWillUnmount():当组件从 DOM 中移除时会调用
 *  1)componentWillUnmount() 会在组件卸载及销毁之前直接调用
 *  2)componentWillUnmount() 中不应调用 setState()，因为该组件将永远不会重新渲染
 *8.组件初始化时调用顺序如下(react 17.0):
    1)constructor
    2)getDerivedStateFromProps
    3)~~componentWillMount/UNSAVE_componentWillMount~~
    4)render
    5)componentDidMount(第一次render之后执行)
 *9.当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下(react 17.0)：
    1)static getDerivedStateFromProps()
    2)shouldComponentUpdate()
    3)render()
    4)getSnapshotBeforeUpdate()
    5)componentDidUpdate()
 */
class lifecycle_function extends Component{
    state={
        name:"react生命周期函数",
    }
    constructor(props){
        super(props);
        console.log("1.生命周期函数-constructor()");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("生命周期函数-shouldComponentUpdate()"); 
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("生命周期函数-getSnapshotBeforeUpdate()"); 
        return "getSnapshotBeforeUpdate";
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("生命周期函数-componentDidUpdate()"); 
    }
    componentDidMount(){
        console.log("3.生命周期函数-componentDidMount()");
    }
    componentWillUnmount(){
        console.log("生命周期函数-componentWillUnmount()");
    }
    render(){
        console.log("2.生命周期函数-render()");
        return(
            <div className="wrap">
                {this.state.name}
                <button onClick={this.changeValue.bind(this)}>改变值</button>
                <div>
                  <button onClick={this.toPage.bind(this)}>页面跳转</button>
                </div>
            </div>
        )
    }
    toPage(){
        window.location.href="#/jquery";
    }
    changeValue(){
        this.setState({
            name:"6666666"
        });
    }
}
export default lifecycle_function;
