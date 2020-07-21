import React,{ useState, useEffect, useRef }from 'react';
/**************************函数组件********************
 *1.函数式组件:如果js函数接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素(jsx),则认为该函数为一个有效的React组件
 *2.函数式组件的参数为组件属性
 *3.Hook 不能在 class 组件中使用，即这使得你不使用 class 也能使用 React
 *4.在函数组件中，没有 this
 *5.在函数退出后变量就会”消失”，而 state 中的变量会被 React保留
 *6.函数式组件可以省略参数props,但必须要有返回值且返回值必须为jsx对象
 *7.每次状态属性发生改变,该函数会重新执行
 *8.react每次组件更新都会调用新的函数(每次刷新都不是同一函数，所以函数内的变量每次都是重新赋值，但是每次都保留原始的state属性)
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
 *5.useEffect(function):dom渲染之后执行(回调函数不带参数)
 *  1)Effect Hook 可以让你在函数组件中执行副作用操作(类似于componentDidMount和componentDidUpdate:)
 *  2)useEffect会在第一次渲染之后和每次更新之后都会执行
 *  3)如果useEffect()返回一个清除函数,则组件卸载的时候执行该清除函数,等同于"componentWillUnmount(子组件重新加载时也会触发该清除函数)
 *  4)组件每次渲染时,会在执行当前 effect 之前对上一个 effect 进行清除
 *  5)useEffect可以在组件渲染后实现各种不同的副作用。有些副作用可能需要清除
 *  6)useEffect可以使用多个函数，React 将按照 effect 声明的顺序依次调用组件中的每一个 effect
 *  7)通过跳过 Effect 进行性能优化
 *     <1>如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可
 *     <2>如果你要使用此优化方式，请确保数组中包含了所有外部作用域中会随时间变化并且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量
 *     <3>如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数
 *     <4>如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直拥有其初始值, effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行 
 *6.useRef(initialValue):返回一个可变的 ref 对象
 *  1)返回的 ref 对象在组件的整个生命周期内保持不变
 *  2)useRef 会在每次渲染时返回同一个 ref 对象
 **/
//父组件
function Component_function(props){
    let name="函数式组件";
    //状态变量，声明了一个叫 count 的 state 变量，然后把它设为 0,通过调用 setCount 来更新当前的 count
    let [mc,setMc]=useState("初始mc");//["初始mc",ƒ]
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(true);
    const ref_span=useRef(null);//创建ref对象,例如:{current: null}
    //console.log(ref_span);

    const changeStateValue=()=>{
        setMc("改变状态mc属性");
        setStatus(!status);
    }
    let changeAttr=()=>{
        name="函数式组件22";
    }//e
    //html dom树渲染完成后触发(每次dom渲染之后之后执行)
    useEffect(()=>{
        var htmlDom=ref_span.current||null;
        console.dir(htmlDom);
        htmlDom.innerText="htmlDom"
        console.log("2.父组件:useEffect1");
    });

    /*通过跳过 Effect 进行性能优化,如果第二个参数数组中的属性值都不发生变化，则跳过该useEffect()函数
    *如果数组中的属性值有一个发生变化，都会调用该函数
    */
    useEffect(()=>{
        console.log("2.父组件(优化):useEffect2");
    },[mc]);

    /*
    *执行只运行一次的，相当于真正的componentDidMount
    */
   useEffect(()=>{
        console.log(".父组件(只运行一次):useEffect3");
    },[]);

    console.log("1.父组件:render");
    return (
        <div className="function_component">
            <h2>{mc}</h2>
            {status?<Component_function_child/>:""}
            <button onClick={changeStateValue}>修改状态属性mc</button><p/>
            <button onClick={changeAttr}>修改成员属性name</button><p/>
            <span ref={ref_span}>useRef</span>
        </div>
    );
}//e

//子函数组件
function Component_function_child(props){
    let name="子函数组件";
    useEffect(()=>{
        name="name"; 
        console.log("1-2子组件useEffect");
        return ()=>{//组件卸载时触发
            console.log("*****Component_function_child子组件卸载*****");
        }
    });

    /*
    *执行只运行一次的，相当于真正的componentWillUnmount
    */
   useEffect(()=>{
        return ()=>{//组件卸载时触发
            console.log("*****componentWillUnmount(子组件卸载只运行一次)*****");
        }
    },[]);

    console.log("1-1子组件:render");
    return (
       <div>
           {name}
       </div>
    );
}

export default Component_function;