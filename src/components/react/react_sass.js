/**************************表单元素-sass************************/
import React ,{ Component }from 'react';

import "./css/react.scss";
class React_form extends Component{
    state={
        name:"ract表单-sass样式",
        inputValue:""
    }
    constructor(props){
        super(props);
    }
    changeInput(evt){
        this.setState({
            inputValue:evt.target.value
        });
    }
    render(){//渲染函数，当组件实例化后调用

        return(
            <div className="form_ele">
                <h1>{this.state.name}</h1>
                <input type="text" 
                       value={this.state.inputValue}
                       onChange={this.changeInput.bind(this)} 
                       />
                <br/>
                <button onClick={this.btnFun.bind(this)}>提交</button>
            </div>
        )
    }
    componentDidMount(){

    }
    btnFun(){
        this.setState({
            inputValue:"888888888"
        });
    }
}
export default React_form;