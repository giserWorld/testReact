import React ,{ Component }from 'react';
import { Divider } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
/*****************************ant_Form**********************************
 *1.高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式
 *2.Form.Item:表单字段组件，用于数据双向绑定、校验、布局等。
 *3.如果Form.Item组件中包含"label"属性,则改item容器中会包含两列(span和输入控件)，反之只有一列
 */
class ant_Form extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_Form",
            input_name:"ddd"
        }
    }
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
            <div className="wrap">
                <h2>{this.state.name}</h2><Divider/>
                <div style={{width:"500px"}}>
                    <Form
                        labelCol={{ span:8 }}
                        wrapperCol={{ span: 16 }}
                    >
                        <Form.Item 
                            label="用户名" 
                            name="username" 
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input value={this.state.input_name} onChange={this.handelChange.bind(this,"input_name")}/>
                        </Form.Item>  

                        <Form.Item
                            wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Button type="primary" onClick={this.btnFun}>提交</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }

    btnFun=()=>{
        this.setState({
            input_name:"改变input值"  
        });
    }//e

    componentDidMount(){
          
    }
}
export default ant_Form;
