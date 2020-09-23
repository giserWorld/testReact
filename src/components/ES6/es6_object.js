import React ,{ Component }from 'react';
/*****************************es6_object**********************************
 *1.ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
 *2.对象的解构赋值:数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
 */
class es6_object extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"es6_object"
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
        //****************1.对象的解构赋值****************//
        var obj={
            name:"mc",
            age:25,
            code:51
        };
        let {age,code,name,n1}=obj;//age="25,code=51,name="mc",n1=undefined
        console.log(age,code,name);//25 51 "mc"
    }
}
export default es6_object;