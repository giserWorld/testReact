
import React ,{ Component }from 'react';

/**************************textarea**********************
 *1.
 **/
class form_textarea extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"textarea",
            inputValue:""
        }
    }
//改变值
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
            <div className="wrap">
              <h2>{this.state.name}</h2>
              <div>
                <textarea value={this.state.inputValue} onChange={this.handelChange_form.bind(this,"inputValue")} rows="4"/><p/>
                <button onClick={this.changeValue}>改变值</button>
              </div>
            </div>
        )
    }
    changeValue=()=>{
        this.setState({
            inputValue:"dasdad"
        });
    }
    componentDidMount(){
        console.log(this.props); 
    }
}
export default form_textarea;
