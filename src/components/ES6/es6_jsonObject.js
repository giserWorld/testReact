import React ,{ Component }from 'react';
/*****************************es6_object**********************************
 *1.ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
 *2.对象的解构赋值:数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
 *3.对象扩展运算:用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
    1)如果扩展运算符后面是一个空对象，则没有任何效果
    2)如果扩展运算符后面不是对象，则会自动将其转为对象
    3)对象的扩展运算符等同于使用Object.assign()方法
 *******************************demo样例**********************************
 *1.对象的解构赋值
 *2.对象扩展运算
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
        //**************2.对象扩展运算*********************//
        var obj1={name:"xiaoli",age:20};
        var obj2={};
        var obj3=1;
        var obj4=null;
        var copyObj={type:"new",...obj1};//{type: "new", name: "xiaoli", age: 20}
        var copyObj2={type:"new2",...obj2};//{type: "new2"}
        var copyObj3={...obj3};//{}
        var copyObj4={...obj4};//{}

        console.log("对象扩展运算:",copyObj4);

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