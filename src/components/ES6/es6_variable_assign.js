import React ,{ Component }from 'react';
/*****************************es6_变量解构赋值**********************************
 *1.ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
 *2.数组的解构赋值:从数组中提取值，按照对应位置，对变量赋值,如果解构不成功，变量的值就等于undefined
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
        //1.数组的解构赋值
        var [a1,a2,q3]=["qq","dd","ff"];
        let [m1, m2] = [1];
        console.log(m1,m2);//1 undefined
    }
}
export default es6_variable_assign;