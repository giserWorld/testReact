import React ,{ Component }from 'react';
/*****************************es6_object**********************************
 *1.数组扩展运算:将一个数组转为用逗号分隔的参数序列
 */
class es6_object extends Component{
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
        //1.数组扩展运算
        var arr1=["qq","dd","ff"];
        var copyArray=[...arr1]
        console.log(arr1);
    }
}
export default es6_object;