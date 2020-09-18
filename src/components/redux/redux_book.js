import React ,{ Component }from 'react';
import { connect } from 'react-redux'
import HistoryBook from './book_history';
import EnglishBook from './book_english';

// import HistoryBook from './book_history_fun';
// import EnglishBook from './book_english_fun';

/**************************redux**********************
 *1.当redux中的状态属性值改变时,不是所有相关的react组件都会触发componentWillReceiveProps()方法
    只有与改变的redux属性相关的react组件，才会触发componentWillReceiveProps()方法,即react组件中
    "mapStateToProps"中是否包含redux变化的变量属性,与"mapDispatchToProps"无关
 *2.当redux状态变量变化的值是相同的，则不会触发componentWillReceiveProps方法
 *3.使用redux状态机制,如果不关闭应用,则redux仓库的属性值不会发生变化,如果想回到初始状态时，主要进行页面时手动改变其值即可
 *4.使用redux管理状态数据时，注意恢复初始状态数据
 **/
class redux_book extends Component{
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

    clickFun=()=>{
        this.props.changeCode(this.state.inputValue);
    }
    clickFun2=()=>{
        this.props.changeCodeName(this.state.inputValue);
    }
    render(){
        return(
            <div>
                <h2>book</h2>
                <input type="text" value={this.state.inputValue} onChange={this.handelChange.bind(this,"inputValue")}></input>
                <button onClick={this.clickFun}>改变redux容器code</button><p/>
                <button onClick={this.clickFun2}>改变redux容器codeName</button><p/>
                <HistoryBook></HistoryBook><p/>
                <EnglishBook></EnglishBook><p/>
            </div>
        )
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
        changeCodeName:(param)=>{dispatch.bookData.changeCodeName(param)}
    }
}//e
export default connect(null,mapDispatchToProps)(redux_book);