import React from 'react';
import Loadable from 'react-loadable';
//统一封装处理所有组件的动态加载
export default (loader) => {
    return Loadable({
        loader,
        loading(){
            return <div>正在加载</div>
        },
    });
}