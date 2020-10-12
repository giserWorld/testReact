import React ,{ Component }from 'react';
import { Divider,InputNumber } from 'antd';
/*****************************ant_InputNumber**********************************
 *1.通过鼠标或键盘，输入范围内的数值
 */
class ant_InputNumber extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_InputNumber",
            inputNumber_value:3
        }
        this.typeFun=this.inputNumber_base;//组件类型
    }

    //值改变
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
                <h2>{this.state.name}</h2><Divider/>
                {this.typeFun()}
            </div>
        )
    }

    /*********************1.基础InputNumber*******************
    *1.
    */
    inputNumber_base=()=>{
        return (
            <>
                <InputNumber 
                    min={1} 
                    max={10} 
                    step={1} //每次改变步数，可以为小数
                    value={this.state.inputNumber_value} 
                    onChange={this.handelChange_form.bind(this,"inputNumber_value")} 
                />
            </>
        );
    }//e
    componentDidMount(){
          
    }
}
export default ant_InputNumber;
