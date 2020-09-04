import React ,{ Component } from 'react';

/**************************form_select************************
 *1.
 */
class form_select extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"form_select",
            selectValue:""
        }
    }

//处理值改变函数
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
                <p>
                    {/* 双向绑定: */}
                    <select value={this.state.selectValue} onChange={this.handelChange_form.bind(this,"selectValue")}>
                        <option value=''>请选择</option>
                        <option value='beijing'>北京</option>
                        <option value='shanghai'>上海</option>
                    </select>
                </p>
                <p>
                    <button onClick={this.changeValue}>改变表单元素值</button>
                </p>
            </div>
        )
    }

    changeValue=()=>{
        this.setState({
            selectValue:"shanghai",
        });
    }
    componentDidMount(){
          
    }
}
export default form_select;
