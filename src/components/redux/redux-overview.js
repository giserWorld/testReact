import React ,{ Component }from 'react';
/**************************redux***********************
 *1.Redux 是 JavaScript 状态容器，提供可预测化的状态管理
 *2.核心：store ->action ->reducer->state
 *3.三大原则：单一数据源，State 是只读，纯函数来执行
 *4.Action:通过dispatch传递数据到store
 *5.Reducer:描述如何响应action更新state
 *6.Store:
    1)维持应用的 state；
    2)提供 getState() 方法获取 state；
    3)提供 dispatch(action) 方法更新 state；
    4)通过 subscribe(listener) 注册监听器;
    5)通过 subscribe(listener) 返回的函数注销监听器。
 **************************react-redux***********************
 *1.React-Redux 将所有组件分成两大类：UI 组件（presentational component）和容器组件（container component）
 *2.UI 组件有以下几个特征:
    1)只负责 UI 的呈现，不带有任何业务逻辑
    2)没有状态（即不使用this.state这个变量）
    3)所有数据都由参数（this.props）提供
    4)不使用任何 Redux 的 API
 *3.容器组件的特征:
    1)负责管理数据和业务逻辑，不负责 UI 的呈现
    2)带有内部状态
    3)使用 Redux 的 API
  *4.如果一个组件既有 UI又有业务逻辑,将它拆分成下面的结构：
        外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图
  *5.React-Redux规定，所有的UI组件都由用户提供，容器组件则是由 React-Redux 自动生成,也就是说，用户负责视觉层，状态管理则是全部交给它
  *6.React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来,例如:
     const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);//VisibleTodoList为容器组件
  *7.使用 connect()前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中
  *8.创建"容器组件"时，需要定义业务逻辑
     1)输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
        mapStateToProps负责输入逻辑,即将state映射到 UI 组件的参数props
     2)输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去
        mapDispatchToProps负责输出逻辑，即将用户对 UI 组件的操作映射成 Action
  *9.mapStateToProps(state,ownProps?):
     1)mapStateToProps是一个函数。它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系
     2)mapStateToProps执行后应该返回一个对象，里面的每一个键值对就是一个映射
     3)mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染
  *10.mapDispatchToProps(dispatch,ownProps?):
     1)mapDispatchToProps用来建立 UI 组件的参数到store.dispatch方法的映射
     2)它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象
  *11.<Provider> 组件:
     1)React-Redux 提供Provider组件，可以让容器组件拿到state
     2)<Provider>是为了给标签内部的"容器组件"提供可访问的store对象
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