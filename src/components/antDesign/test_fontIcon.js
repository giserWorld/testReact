/**************************字体图标************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

import { Button,Icon } from 'antd';

class NewsCom extends Component{
    state={
        name:"ant字体图标",
        type:"check"
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <Icon type={this.state.type} /><p/>
                <Icon type="fast-forward" /><p/>
                <hr/><Button type="primary" onClick={this.changeFun.bind(this)}>改变字体图标</Button>
            </div>
        )
    }
    componentDidMount(){

    }
    changeFun(){
        this.setState({
            type:"fork" 
        })
    }
    
}
export default NewsCom;