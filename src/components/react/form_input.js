/*************************form_input************************/
import React ,{ Component }from 'react';

/********************表单元素单向、双向属性绑定(组件内部)***********************
 *1.当使用“defaultValue={绑定的数据}”的时候，就是一个非受控组件
 *2.当使用“onChange={this.handleChange.bind(this)}”的时候，就是一个受控组件
 *3.defaultValue就是默认值，只有首次生效
 *4.受控组件就是表单元素与state对象属性通过“onChange”进行绑定(单向、双向绑定)
 *5.state对象中的属性值是react组件的状态属性(状态属性值得改变，会刷新组件页面中的值)
 *6.通过“onChange”和“value”属性可实现双向绑定,“value”属性会绑定表单，“onChange”表单会绑定属性
 *7.不能同时指定"defaultValue"和"value"两个属性，只能指定其中的一个,否则报错
 *8.表单元素必须包含“defaultValue”和“onChange”其中的一种，否则报错
 *9.如果只有"onChange"属性,则只会实现表单绑定属性的单向,如果只有"value"属性,则会报错
 *10.“handelChange”方法中因为有些react组件没有"name"属性，所以该方法中获取“name”属性值,可能会报错
 *11.一般表单指定“onChange”和“value”两个属性
 *12.一个html表单元素只有"defaultValue"属性或者只有"onChange"和"value"
 *13.通过给“handelChange”方法传递额外的参数即可实现原生表单元素和react组件的双向绑定的通用方法
 */
class form_input  extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"form_input",
            inputValue:"非受控组件",
            inputValue_double:"双向绑定",
        }
    }

/*******************处理值改变函数(表单元素)******************
*更新时间:2020.10.12
*参数:name(String):表单元素绑定的状态属性
******evt(Event):"onChange"触发的事件对象,可能为event或表单值
*注解:
*1.html元素、react组件绑定状态属性(单向、双向绑定属性方法),
*2.该方法支持的表单元素:"input"、"select"、"textarea"、"radio"、"InputNumber"
*3.不要使用箭头函数
*/
handelChange_form(name,evt){
    let _self=this;
    let key=name || "";
    let value=evt&&evt.target?evt.target.value:evt;//表单值
    let state={};
    if(key)state[key]=value;
    if(key)_self.setState(state);
    console.log(state);
}//e

    render(){
        return(
            <div>
                <h1>{this.state.name}:</h1>
                <div>
                    {/* 1.不受react控制组件,只有首次生效: */}
                    <input type="text" defaultValue={this.state.inputValue}/><p/>
                    {/*2.双向绑定,受react控制: */}
                    <input type="text" value={this.state.inputValue_double} onChange={this.handelChange_form.bind(this,"inputValue_double")}/><p/>
                </div>
                <div>
                    <button onClick={this.changeValue}>改变表单元素值</button>
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
    changeValue=()=>{
        this.setState({
            inputValue_one:"改变值-one",
            inputValue_double:"改变值-double"
        });
    }
}
export default form_input;
