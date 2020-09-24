import React ,{ useState,useEffect }from 'react';
import Child_englishBook from './child_englishBook';
/**************************index**********************
 *
 **/
const Parent_book=(props)=>{
    let name="parent_book";
    let [username,setUsername]=useState("小李");
    let clickFun=()=>{
        setUsername("小王")  
    }

    console.log("parent:render()");//render渲染组件
    return (
        <div className="wrap">
            <h2>{name}</h2>
            <div>
                <div>username:{username}</div>
                <button onClick={clickFun}>更新state</button>
            </div>
            <Child_englishBook attr="parent_book"></Child_englishBook>
        </div>
    );
}//e
export default Parent_book;