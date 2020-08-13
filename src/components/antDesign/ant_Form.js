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
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><Divider/>
                <div>
                    <Form
                        labelCol={{ span:8 }}
                        wrapperCol={{ span: 16 }}
                    >
                        {/* 定义一个表单字段 */}
                        <Form.Item 
                            label="用户名" 
                            name="username" 
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input />
                        </Form.Item>  

                        <Form.Item
                            wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_Form;
