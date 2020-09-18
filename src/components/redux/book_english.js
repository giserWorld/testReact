import React ,{ Component }from 'react';
import { connect } from 'react-redux'


class book_english extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"book_english",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <p>code:{this.props.code}</p>
            </div>
        )
    }
    componentDidMount(){

    }
    //组件将要接受Props函数(组件初始化时不会触发)
    componentWillReceiveProps(nextProps){ 
      let _self=this;
      _self.nextProps=nextProps;//新属性
      if(nextProps.redux_value){//redux属性更新
          
      }
      else{//父组件属性更新
  
      }
      console.log("book_english:",nextProps);
    }//e
}

//从外部获取数据
const mapStateToProps=(state)=>{
  return {
    redux_value:"reduxProps",
    code:state.bookData.code
  }
}//e

//向外部传递action
const mapDispatchToProps=(dispatch)=>{
  return {
    changeCodeName:(param)=>{dispatch.bookData.changeCodeName(param)},
    changeCode:(param)=>{dispatch.bookData.changeCode2(param)}
  }
}//e

export default connect(mapStateToProps,mapDispatchToProps)(book_english);