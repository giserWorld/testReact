import React ,{ Component }from 'react';
import { Divider } from 'antd';
import { Form, Input, Button, Checkbox,Select } from 'antd';
const { Option } = Select;
/*****************************ant_Form**********************************
 *1.高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式
 *2.使用场景:
    1)用于创建一个实体或收集信息
    2)需要对输入的数据类型进行校验时
 *3.Form.Item:表单字段组件，用于数据双向绑定、校验、布局等。
 *4.如果Form.Item组件中包含"label"属性,则改item容器中会包含两列(span和输入控件)，反之只有一列
 *5.Form常用属性:
    <Form
        initialValues={form_initValue}//表单默认值,只有初始化以及重置时生效
    />
 *6.Item常用属性:
    <Form.Item 
        label="用户名"//label 标签的文本 
        name="username"//字段名,表单数据参数
        rules={[{ required: true,message: '请输入用户名!' }]}//校验规则
    >
 *7.
 ********************typeFun*********************
 *1.form_base():基础表单
 */
class ant_Form extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_Form",
            input_name:"ddd",
            form_initValue:{
                recordValue: true
            }
        }
        this.typeFun=this.form_base;//组件类型
    }//e

    //提交表单且数据验证成功后回调事件,即获取表单填写的数据
    form_Finish=(formValues)=>{
        console.log("form_Finish:",formValues);//{username:"",password:"",record:""}
    }//e

    //重置
    btn_reset=(type)=>{
        var formObj=this.refs["form_instance"];//表单实例
        if(type==="重置"){
            formObj.resetFields();//重置表单数据,重置到"initialValues"状态
        }
        else if(type==="填充数据"){//表单数据回显
            formObj.setFieldsValue({
                username:"xl",
                selectValue:"密码1"
            });
        }
    }//e

    /*********************1.基础表单*******************
    *1. 
    */
    form_base=()=>{
        return (
            <>
                <Form
                    ref="form_instance"
                    labelCol={{ span:4 }}//label 标签统一布局
                    wrapperCol={{ span: 20 }}//表单控件统一布局
                    initialValues={this.state.form_initValue}//表单默认值，只有初始化以及重置时生效
                    onFinish={this.form_Finish}//提交表单且数据验证成功后回调事件(获取表单数据)
                    //requiredMark={true}//必选样式，可以切换为必选或者可选展示样式
                    //size={'small'}//设置字段组件的尺寸
                >
                    {/* 1.表单元素-input */}
                    <Form.Item 
                        label="用户名"//label 标签的文本 
                        name="username"//字段名
                        //rules={[{ required: true,message: '请输入用户名!' }]}//校验规则
                    >
                        <Input/>
                    </Form.Item> 

                    {/* 2.表单元素-select */}
                    <Form.Item 
                        label="密码"
                        name="selectValue"
                        //rules={[{ required: true,message: '请输入密码!' }]}
                    >
                        <Select
                            placeholder="请选择数据"
                        >
                            <Option value="密码1">密码1</Option>
                            <Option value="密码2">密码2</Option>
                        </Select>
                    </Form.Item> 

                    {/* 3.表单元素-checkbox */}
                    <Form.Item
                        label=""
                        name="recordValue"
                        valuePropName="checked"
                        wrapperCol={{ offset: 4}}
                    >
                        <Checkbox>记住</Checkbox>
                    </Form.Item>

                    {/* 4.表单元素-button */}
                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16 }}//单列
                    >
                        {/* 设置原生的button的属性,点击会触发表单的提交,触发onFinish函数 */}
                        <Button type="primary" htmlType="submit" style={{marginRight:"10px"}}>登录</Button>
                        <Button onClick={()=>{this.btn_reset("重置")}}>重置</Button>
                        <Button type="link" onClick={()=>{this.btn_reset("填充数据")}}>填充数据</Button>
                    </Form.Item>
                </Form>
            </>
        );
    }//e

    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><hr/>
                <div style={{width:"500px",border:"1px solid red",paddingTop:"10px"}}>
                    {this.typeFun()}
                </div>
            </div>
        )
    }
}
export default ant_Form;
