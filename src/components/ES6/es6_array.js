import React ,{ Component }from 'react';
/*****************************es6_array**********************************
 *1.ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
 *2.数组扩展运算:将一个数组转为用逗号分隔的参数序列
 *3.数组的解构赋值:从数组中提取值，按照对应位置，对变量赋值,如果解构不成功，变量的值就等于undefined
 *4.数组扩展运算:将一个数组转为用逗号分隔的参数序列
    1)复制数组
        //a2克隆a1数据
        例如:a1=[1,2];a2=[...a1];
    2)合并数组
        //a3数据为a1,a2数组的合并
        例如:a1=[1,2];a2=[55,66];a3=[...a1,...a2];
 */
class es6_array extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"es6_array"
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
        //************1.数组扩展运算**********//
        var arr1=["qq","dd","ff"];
        var copyArray=[...arr1]
        console.log(arr1);

        //************2.数组的解构赋值**********//
        var [a1,a2,q3]=["qq","dd","ff"];//a1="qq",a2="dd",q3="ff"
        let [m1, m2] = [1];//m1=1,m2=undefined
        //console.log(m1,m2);//1 undefined
    }
}
export default es6_array;