import React ,{ Component }from 'react';
/*****************************es6_变量解构赋值**********************************
 *1.ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
 *2.数组的解构赋值:从数组中提取值，按照对应位置，对变量赋值,如果解构不成功，变量的值就等于undefined
 *3.对象的解构赋值:数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
 */
class es6_variable_assign extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"es6_variable_assign"
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
        //2.对象的解构赋值
        var obj={
            name:"mc",
            age:25,
            code:51
        };
        let {age,code,name,n1}=obj;//age="25,code=51,name="mc",n1=undefined
        console.log(age,code,name);//25 51 "mc"

        //1.数组的解构赋值
        var [a1,a2,q3]=["qq","dd","ff"];//a1="qq",a2="dd",q3="ff"
        let [m1, m2] = [1];//m1=1,m2=undefined
        //console.log(m1,m2);//1 undefined
    }
}
export default es6_variable_assign;