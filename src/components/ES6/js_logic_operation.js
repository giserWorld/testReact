import React ,{ Component }from 'react';
/*****************************js-逻辑运算符**********************************
 *1.在JS “&&”和“||”是逻辑运算符；“&”和“|”是位运算符
 *2."||":
    1)只要“||”前面为true,不管“||”后面是true还是false，都返回“||”前面的值
    2)只要“||”前面为false,不管“||”后面是true还是false，都返回“||”后面的值
 *3."&&":
    1)只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值
    2)只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值
 *****************************应用场景**********************************
 *1.变量初始化赋值
 *2."if"判断中使用逻辑运算符
 *3.代码执行顺序
 */
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index"
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
        //1.变量初始化赋值
        var age;
        var result1=age||"age";
        console.log("变量初始化:",result1);
        //2.if条件判断
        var status1=(1+5);
        var status2=("status2");
        if(status1&&status2){//status1&&status2结果返回"status2"
            console.log("if判断中使用逻辑运算符");
        }
        //3.代码执行顺序(如果"&&"前面代码结果为true,则执行"&&"后面的代码)
        var n1=true&&console.log("ddd");//undefined
        var n2= false&&console.log("ddd2");//false
        
    }
}
export default index;