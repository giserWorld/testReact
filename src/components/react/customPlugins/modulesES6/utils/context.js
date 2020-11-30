import React from 'react'
//创建一个context对象(向下兼容的环境对象),在传参的那一层（父组件）顶部创建一个 Context 对象 
export const MyContext = React.createContext({//初始化环境数据
    type:"MyContext",
    funAttr:Function.prototype
});