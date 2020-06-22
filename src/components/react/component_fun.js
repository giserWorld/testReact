/**************************函数组件********************* */
import React from 'react';//核心组件类,每一个组件中必须包含该类

//定义新闻组件
function NewsComponent(props){
    return <h1>你好，新闻组件,{props.name}</h1>;
}
export default NewsComponent;//将组件暴露出去