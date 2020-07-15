import React,{ useState, useEffect }from 'react';
/**************************函数组件********************
 *1.函数式组件:如果js函数接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素(jsx),则认为该函数为一个有效的React组件
 *2.函数式组件的参数为组件属性
 *3.Hook 不能在 class 组件中使用，即这使得你不使用 class 也能使用 React
 *4.在函数组件中，没有 this
 *5.在函数退出后变量就会”消失”，而 state 中的变量会被 React保留
 *6.函数式组件可以省略参数props,但必须要有返回值且返回值必须为jsx对象
 *7.每次状态属性发生改变,该函数会重新执行
 **************************react库********************
 *1.react Hook:Hook是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
 *2.Hook 使用规则：
    1)只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
    2)只能在 React 的函数组件中调用 Hook,不要在其他 JavaScript 函数中调用
 *3.函数式组件中可多次使用 useState()
 *4.useState(init):init不一定要是一个对象,init参数只有在第一次渲染时会被用到
    1)可声明多个 state 变量
    2)useState(init)函数返回一个数组,[state,setState]
    3)state 只在组件首次渲染的时候被创建。在下一次重新渲染时，useState 返回给我们当前的 state
 *5.useEffect(function):dom渲染之后执行
 *  1)Effect Hook 可以让你在函数组件中执行副作用操作(类似于componentDidMount和componentDidUpdate:)
 *  2)useEffect会在第一次渲染之后和每次更新之后都会执行
 **/
//定义新闻组件
function Component_function(props){
    let name="函数式组件";
    //状态变量，声明了一个叫 count 的 state 变量，然后把它设为 0,通过调用 setCount 来更新当前的 count
    let [mc,setMc]=useState("初始mc");//["初始mc",ƒ]
    const [count, setCount] = useState(0);
    const changeStateValue=()=>{
        setMc("改变状态mc属性");
    }
    //html dom树渲染完成后触发(每次dom渲染之后之后执行)
    useEffect(()=>{
        console.log("2.useEffect");
    });
    console.log("1.render");
    return (
        <div className="function_component">
            <h2>{mc}</h2>
            <button onClick={changeStateValue}>修改状态属性mc</button>
        </div>
    );
    function changeValue(){

    }
}//e
export default Component_function;