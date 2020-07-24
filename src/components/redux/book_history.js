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
                    {this.props.redux_value}<p/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log("_self:",this);
    }
}


/*******************reudx状态映射props*****************
 *1.redux状态数据映射到组件props属性中
 *2.该函数返回的对象数据会追加到组件的props中
 *3.redux state状态数据每次发生变化都会调用该函数
*/
const mapStateToProps=state=>{
    return{
        redux_value:state.bookData.redux_value
    }
}//e

/*******************状态分发props*****************
 *1.该函数在"状态映射"后触发
 *2.该函数返回的对象数据会追加到组件的props中
 *3."容器组件"初始化时触发，调用一次
*/
const mapDispatchToProps=(dispatch)=>{
    return{
        
    }
}//e
//构建redux容器
var reduxContainer=connect(mapStateToProps,mapDispatchToProps)(historybook);

//console.log("react组件:",historybook);
//console.log("readux容器:",reduxContainer);
export default reduxContainer;