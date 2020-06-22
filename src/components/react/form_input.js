/*************************form_input************************/
import React ,{ Component }from 'react';

/*****************************注解**********************************
 *1.当使用“defaultValue={绑定的数据}”的时候，就是一个非受控组件
 *2.当使用“onChange={this.handleChange.bind(this)}”的时候，就是一个受控组件
 *3.defaultValue就是默认值，只有首次生效
 *4.受控组件就是表单元素与state对象属性通过“onChange”进行绑定(单向、双向绑定)
 *5.state对象中的属性值是react组件的状态属性(状态属性值得改变，会刷新组件页面中的值)
 *6.通过“onChange”和“value”属性可实现双向绑定,“value”属性会绑定表单，“onChange”表单会绑定属性
 *7.不能同时指定"defaultValue"和"value"两个属性，只能指定其中的一个,否则报错
 *8.表单元素必须包含“defaultValue”和“onChange”其中的一种
 *9.如果只有"onChange"属性,则只会实现表单绑定属性的单向
 *10.如果只有"value"属性,则会报错
 *11.一般表单指定“onChange”和“value”两个属性
 *12.一个html表单元素只有"defaultValue"属性或者只有"onChange"和"value"
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

    /*******************处理值改变函数******************
    *参数:name(String):表单元素绑定的状态属性
    ******evt(Event):"onChange"触发的事件对象
    *注解:
    *1.html元素、react组件绑定状态属性(单向、双向绑定属性方法),
    */
    handelChange(name,evt){
        let key=name || "";
        let value=evt.target.value || "";//表单值
        let state={};
        if(key)state[key]=value;
        if(key)this.setState(state);
        console.log(state);
    }

    render(){
        return(
            <div>
                <div>
                    <h1>{this.state.name}:</h1>
                </div>
                <div>
                    {/* 1.不受react控制组件,只有首次生效: */}
                    <input type="text" defaultValue={this.state.inputValue}/>
                    {/*2.双向绑定,受react控制: */}
                    <input type="text" value={this.state.inputValue_double} onChange={this.handelChange.bind(this,"inputValue_double")}/>
                </div>
                <div>
                    <button onClick={this.changeValue.bind(this)}>改变表单元素值</button>
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
    changeValue(){
        this.setState({
            inputValue_one:"改变值-one",
            inputValue_double:"改变值-double"
        });
    }
}
export default form_input;
