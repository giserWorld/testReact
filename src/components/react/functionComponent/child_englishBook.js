import React ,{ useState,useEffect }from 'react';

/**************************index**********************
 *
 **/
const child_englishBook=(props)=>{
    let name="child_englishBook";


    console.log("child:render()");//render渲染组件
    return (
        <div className="wrap">
            <h2>{name}</h2>
            <div>{props.attr}</div>
        </div>
    );
}//e
export default child_englishBook;