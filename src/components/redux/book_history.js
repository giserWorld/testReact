import React ,{ Component }from 'react';
import { connect } from 'react-redux'

//展示组件
class historybook extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"historybook",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <div>
                    {this.props.count}<p/>
                    <button onClick={this.props.increment}>increment</button><p/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log("_self:",this);
    }
}

var calc_add=(value)=>{
    return value?value+1:0;
}

/*******************reudx状态映射props*****************
 *1.redux状态数据映射到组件props属性中
 *2.该函数返回的对象数据会追加到组件的props中
 *3.redux state状态数据每次发生变化都会调用该函数
*/
const mapStateToProps=state=>{
    return{
        type:"reudx状态映射props",
        count:state.count

    }
}//e

/*******************状态分发props*****************
 *1.该函数在"状态映射"后触发
 *2.该函数返回的对象数据会追加到组件的props中
 *3."容器组件"初始化时触发，调用一次
*/
const mapDispatchToProps=(dispatch)=>{
    return{
        type2:"状态分发props",
        increment: (param) =>{
            var dd=21;
        },
    }
}//e
//构建redux容器
var reduxContainer=connect(mapStateToProps,mapDispatchToProps)(historybook);

//console.log("react组件:",historybook);
//console.log("readux容器:",reduxContainer);
export default reduxContainer;