import React ,{ Component }from 'react';
import { connect } from 'react-redux'

//纯展示组件
const EnglishFun=(props)=>{
  
  console.log("EnglishFun-render()");
  return(
    <div>
        <h2>EnglishFfun</h2>
        <div>
          {props.redux_value}
        </div>
    </div>
  ) 
}//e

//从外部获取数据
function mapStateToProps(state) {
  return {
    redux_value:"ssss"
  }
}//e
//向外部传递action
function mapDispatchToProps(dispatch) {
  return {
    
  }
}//e

export default connect(mapStateToProps,mapDispatchToProps)(EnglishFun);