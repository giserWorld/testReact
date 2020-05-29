/*************************新闻组件************************/
import React ,{ Component }from 'react';

class index extends Component{
    
    constructor(props){
        super(props);
        this.state={
            name:"新闻组件",
            value:props.value,//实现父子组件状态属性的绑定，本组件双向绑定
        }
    }
    //html元素、react组件绑定状态属性(单向、双向绑定属性方法),
    handelChange(name,e_value){//e:"e.target"或组件value值
        let key=name || "";
        let value=e_value.target ? e_value.target.value : e_value;
        let state={};
        state[key]=value;
        console.log(state);
        if(key)this.setState(state);
        if(this.props.onChange)this.props.onChange(value);//子组件绑定
    }
    //保持"Props"和"State"变量值保持一致
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.value!=nextState.value){
            nextState.value=nextProps.value;
            this.setState(nextState);
            return false;
        }
        else{
            return true;
        }
    }
    render(){

        return(
            <div className="wrap">
                <div>
                    <h1>{this.state.name}</h1>
                </div>
                <div>
                    <input type='text'
                           value={this.state.value}
                           onChange={this.handelChange.bind(this,"value")}></input>
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
