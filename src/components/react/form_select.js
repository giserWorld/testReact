/*************************form_select************************/
import React ,{ Component } from 'react';

/*****************************表单元素单向、双向属性绑定(组件内部)*********************
 *1.当使用“defaultValue={绑定的数据}”的时候，就是一个非受控组件
 *2.当使用“onChange={this.handleChange.bind(this)}”的时候，就是一个受控组件
 *3.defaultValue就是默认值，只有首次生效
 *4.受控组件就是表单元素与state对象属性通过“onChange”进行绑定(单向、双向绑定)
 *5.state对象中的属性值是react组件的状态属性(状态属性值得改变，会刷新组件页面中的值)
 *6.表单元素必须包含“defaultValue”和“onChange”其中的一种，否则报错
 *7.通过“onChange”和“value”属性可实现双向绑定
 *8.“handelChange”方法中因为有些react组件没有"name"属性，所以该方法中获取“name”属性值
 *可能会报错
 *9.通过给“handelChange”方法传递额外的参数即可实现原生表单元素和react组件的双向绑定的通用方法
 *
 */
class form_select extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"form_select",
            selectValue:""
        }
    }

    /*******************处理值改变函数******************
    *更新时间:2020.06.22
    *参数:name(String):表单元素绑定的状态属性
    ******evt(Event):"onChange"触发的事件对象,可能为event或表单值
    *注解:
    *1.html元素、react组件绑定状态属性(单向、双向绑定属性方法),
    */
    handelChange(name,evt){
        let key=name || "";
        let value=evt.target?evt.target.value:evt;//表单值
        let state={};
        if(key)state[key]=value;
        if(key)this.setState(state);
        console.log(state);
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}:</h1>
                <div>
                    {/* 双向绑定: */}
                    <select value={this.state.selectValue} onChange={this.handelChange.bind(this,"selectValue")}>
                        <option value=''>请选择</option>
                        <option value='beijing'>北京</option>
                        <option value='shanghai'>上海</option>
                    </select>
                </div>
                <div>
                    <button onClick={this.changeValue.bind(this)}>改变表单元素值</button>
                </div>
            </div>
        )
    }

    changeValue(){
        this.setState({
            selectValue:"shanghai",
        });
    }
    componentDidMount(){
          
    }
}
export default form_select;
