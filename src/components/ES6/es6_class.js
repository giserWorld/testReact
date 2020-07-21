import React ,{ Component }from 'react';
/*****************************es6_calss**********************************
 *1.数组扩展运算:将一个数组转为用逗号分隔的参数序列
 */
class es6_calss extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"es6_calss"
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
            </div>
        )
    }
    componentDidMount(){
        console.log("********静态属性*******",es6_calssFun.staticName);
        es6_calssFun.staticFun("9999999"); //静态函数
        console.log("********静态自执行函数*******",es6_calssFun.baseUrl);
    }
}
//es6类
class es6_calssFun{
    static staticName="静态属性";
    //静态函数
    static staticFun=(value)=>{
        console.log("静态函数:",value);
    };
    //静态自执行函数
    static baseUrl = (function () {
        if (process.env.NODE_ENV === "development 开发环境") {
          return "development"
        } 
        else {
          return "product 产品环境"
        }
    })()
}//e

export default es6_calss;