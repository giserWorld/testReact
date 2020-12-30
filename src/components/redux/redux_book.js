import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import ChineseBook from './book_chinese';
import HistoryBook from './book_history';
import EnglishBook from './book_english';

// import HistoryBook from './book_history_fun';
// import EnglishBook from './book_english_fun';

/**************************redux_book**********************
 *
 **/
class redux_book extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:"dd"
        }
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

    clickFun=()=>{
        this.props.changeCode(this.state.inputValue);
    }
    clickFun2=()=>{
        this.props.changeCodeName(this.state.inputValue);
    }
    clickFun3=()=>{
        let url="/test";
        let paramStr="name=router_search";
        this.props.history.push({pathname:url,search:paramStr});
    }
    render(){
        return(
            <div>
                <h2>book</h2>
                <input type="text" value={this.state.inputValue} onChange={this.handelChange.bind(this,"inputValue")}></input>
                <button onClick={this.clickFun}>改变redux容器code</button><p/>
                <button onClick={this.clickFun2}>改变redux容器codeName</button><p/>
                <button onClick={this.clickFun3}>跳转页面路由</button><p/>
                <HistoryBook></HistoryBook><p/>
                <EnglishBook></EnglishBook><p/>
                <ChineseBook></ChineseBook><p/>
            </div>
        )
    }
    //组件卸载
    componentWillUnmount(){
       this.props.initRedux();//初始化redux 
    }
    componentDidMount(){

    }
}
  
/*******************reudx状态映射props*****************
 *1.redux状态数据映射到组件props属性中
 *2.该函数返回的对象数据会追加到组件的props中
 *3.redux state状态数据每次发生变化都会调用该函数
*/
const mapStateToProps=(state)=>{
    return {
      redux_value:"reduxProps",
      code:state.bookData.code
    }
}//e

/*******************状态分发props*****************
 *1.该函数在"状态映射"后触发
 *2.该函数返回的对象数据会追加到组件的props中
 *3."容器组件"初始化时触发，调用一次
*/
const mapDispatchToProps=(dispatch)=>{
    return {
        changeCode:(param)=>{dispatch.bookData.changeCode2(param)},
        changeCodeName:(param)=>{dispatch.bookData.changeCodeName(param)},
        initRedux:()=>{dispatch.bookData.initRedux()},
    }
}//e
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(redux_book));