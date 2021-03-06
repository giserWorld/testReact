import React ,{ Component }from 'react';
/*****************************扩展运算符**********************************
 *1.扩展运算符（spread）是三个点（...）
 *2.该运算符主要用于函数调用
 *3.数组扩展运算:将一个数组转为用逗号分隔的参数序列
    1)复制数组
        //a2克隆a1数据
        例如:a1=[1,2];a2=[...a1];
    2)合并数组
        //a3数据为a1,a2数组的合并
        例如:a1=[1,2];a2=[55,66];a3=[...a1,...a2];
 *4.对象扩展运算:用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
    1)如果扩展运算符后面是一个空对象，则没有任何效果
    2)如果扩展运算符后面不是对象，则会自动将其转为对象
    3)对象的扩展运算符等同于使用Object.assign()方法
 */
class calculate_spread extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"calculate_spread"
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

        //**************1.数组扩展运算*********************//
        var arr=[1,2,3,4,5];//"...arr"等同于"1,2,3,4,5"(结果不是字符串)
        console.log("数组扩展运算:",...arr);
    }
}
export default calculate_spread;


    