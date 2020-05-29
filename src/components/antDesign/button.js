/**************************组件************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

import { DatePicker } from 'antd';
import { Button } from 'antd';

class button extends Component{
    state={
        name:"button",
    }
    constructor(props){//构造函数props组件传的值
        super(props);
    }
    render(){
        var Select=this.props.children;
        return(
            <div>
                <DatePicker></DatePicker>
                <hr></hr>
                <Button type="primary">Primary</Button>
            </div>
        )
    }
    componentDidMount(){
       
    }
}
export default button;//将组件暴露出去

