/**************************函数组件************************/
import React from 'react';//核心组件类,每一个组件中必须包含该类


//定义新闻组件
export default function(props){
    const name="新闻组件";//定义组件名字
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeValue}>改变属性值</button>
        </div>
    );

/**************************函数****************************/
    function changeValue(){
        alert("5555");
    }
}

