import React,{ useState } from 'react';
import { dodgerblue } from 'color-name';

/*****************************函数式组件**********************************
 *1.函数式组件可以省略参数props,但必须要有返回值且返回值必须为jsx对象
 *2.每次状态属性发生改变,该函数会重新执行
 */
function FunctionCom(props){
    let name="函数式组件";
    //创建状态属性
    let [mc,setMc]=useState("初始mc");
    const changeStateValue=()=>{
        setMc("改变状态mc属性");
    }
    return (
        <div className="function_component">
            <h2>{mc}</h2>
            <button onClick={changeStateValue}>修改状态属性mc</button>
        </div>
    );
}//e
export default FunctionCom;
