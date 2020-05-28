/**************************children************************/
import React ,{ Component }from 'react';


class children extends Component{
    state={
        name:"children",
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
        var Select=this.props.children;
        return(
           
            <div>
                <h3>{this.state.name}</h3>
                <Select></Select>
            </div>
        )
    }
    componentDidMount(){
       
    }
}
export default children;//将组件暴露出去