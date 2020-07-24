import React ,{ Component }from 'react';
import { connect } from 'react-redux'
import History from './book_history';
import English from './book_english';

//展示组件
class Book extends Component{
    state={
        inputValue:"dd"
    }
    /*******************处理值改变函数******************
    *更新时间:2020.07.24
    *参数:name(String):表单元素绑定的状态属性
    ******evt(Event):"onChange"触发的事件对象,可能为event或表单值
    *注解:
    *1.html元素、react组件绑定状态属性(单向、双向绑定属性方法),
    */
   handelChange(name,evt){
        let key=name || "";
        let value=(evt&&evt.target)?evt.target.value:evt;//表单值
        let state={};
        if(key)state[key]=value;
        if(key)this.setState(state);
        //console.log(state);
    }//e

    render(){
        return(
            <div>
                <h2>book</h2>
                <input type="text" value={this.state.inputValue} onChange={this.handelChange.bind(this,"inputValue")}></input>
                <button onClick={()=>this.props.changeData(this.state.inputValue)}>改变容器redux容器状态</button>
                <hr/><History></History>
                <hr/><English></English>
            </div>
        )
    }
    componentDidMount(){

    }
}
 var data={
    type:"数据"
 };
  
  //向外部传递action
  function mapDispatchToProps(dispatch) {
    return {
        changeData:(param)=>{dispatch.bookData.changeData(param)}
    }
  }//e
export default connect(null,mapDispatchToProps)(Book);