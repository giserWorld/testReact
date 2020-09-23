import React ,{ useState,useEffect }from 'react';

/**************************react_ts_FC**********************
 *1.FC就是FunctionComponent的缩写，是函数组件
 *2.React.FC<>是在typescript中使用的泛型
 **/
type typeProps={//属性类型
    attr:"属性类型",
    type:"类型",
}
const react_ts_FC:React.FC<typeProps>=(props)=>{
    let {attr,type}=props;
    let name:any="react_ts_FC";
    
    console.log("react_props:",props);
    return (
        <div className="react_ts_FC">
            <h2>{name}</h2>
        </div>
    );
}//e
console.log("react核心库：",React);
export default react_ts_FC;