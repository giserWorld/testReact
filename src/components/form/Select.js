/**************************select表单************************/
import React ,{ Component }from 'react';


class Select extends Component{
    state={
        name:"select表单",
        value:"",

    }
    constructor(props){//构造函数props组件传的值
        super(props);
       
    }
    handleValue(evt){
        this.setState({
            value:evt.target.value,
        });
    }
    render(){
        return(
            <div>
                <h3>{this.state.name}</h3>
                <select value={this.state.value} onChange={this.handleValue.bind(this)}>
                    <option value="beijign">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="guangzhou">广州</option>
                </select>
                <hr></hr>
                <button onClick={this.changeValue.bind(this)}>改变值</button>
            </div>
        )
    }
    componentDidMount(){
       
    }
    changeValue(){
        this.setState({
            value:"guangzhou"
        });
    }
}
export default Select;//将组件暴露出去