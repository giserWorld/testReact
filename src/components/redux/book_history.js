import React ,{ Component }from 'react';
import { connect } from 'react-redux'

//展示组件
class book_history extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"book_history",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <p>codeName:{this.props.codeName}</p>
            </div>
        )
    }
    componentDidMount(){
        //console.log("_self:",this);
    }
    //组件将要接受Props函数(组件初始化时不会触发)
    componentWillReceiveProps(nextProps){ 
        let _self=this;
        _self.nextProps=nextProps;//新属性
        if(nextProps.redux_value){//redux属性更新
            
        }
        else{//父组件属性更新
    
        }
        console.log("book_history:",nextProps);
    }//e
}

const mapStateToProps=(state)=>{
    return {
      redux_value:"reduxProps",
      codeName:state.bookData.codeName,
      //code:state.bookData.code
    }
}//e


const mapDispatchToProps=(dispatch)=>{
    return {
        changeCodeName:(param)=>{dispatch.bookData.changeCodeName(param)},
        changeCode:(param)=>{dispatch.bookData.changeCode2(param)}
    }
}//e

//构建redux容器
var reduxContainer=connect(mapStateToProps,mapDispatchToProps)(book_history);
//console.log("react组件:",book_history);
//console.log("readux容器:",reduxContainer);
export default reduxContainer;