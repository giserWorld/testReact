import React ,{ Component }from 'react';
import { Modal, Button } from 'antd';

/**************************基础模态框**********************
 *1.motal_basic:模态框(底部按钮)
 **/
class testModal extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"模态框组件",
            modalVisible:false,//显示状态
            modalTitle:"标题",//标题
            modalType:""
        }
    }
    render(){
        let modelFun=this[this.state.modalType]||"";
        return(
            <div className="wrap myModal">
                <h1>{this.state.name}</h1>
                {modelFun?modelFun():""}
                <Button type="primary" onClick={this.showModal.bind(this,"motal_basic")}>1.模态框(底部按钮)</Button><p/>
                <Button type="primary" onClick={this.showModal.bind(this,"motal_noFoot")}>2.模态框(无底部按钮)</Button><p/>
                <Button type="primary" onClick={this.showModal.bind(this,"motal_noAutoClose")}>3.模态框(无底部按钮,点击蒙版不关闭)</Button><p/>
            </div>
        )
    }
    /**************关闭模态框(通用方法)*************
     *更新时间:2020.08.24
     *参数:modalField(String):控制modal可视字段
     **/
    modalCancel=(modalField)=>{
        let state={};
        if(modalField){
            state[modalField]=false;
            this.setState(state);
        }
    }//e

    /*********************3.模态框(无底部按钮,点击mask蒙版不关闭)*******************/
    motal_noAutoClose=()=>{
        return (
            <Modal
                className="modal_login"
                width="400px"
                title={this.state.modalTitle}
                visible={this.state.modalVisible}
                zIndex={1000}
                onCancel={()=>{this.modalCancel("modalVisible")}}
                footer={null}
                maskClosable={false}
            >
                <div className="modal_content">
                    这个是模态框显示的内容！
                </div>
            </Modal>
        )
    }
    /*********************2.模态框(不无底部按钮)*******************/
    motal_noFoot=()=>{
        return (
            <Modal
                className="motal_noFoot"
                title={this.state.modalTitle}
                visible={this.state.modalVisible}
                zIndex={1000}
                onCancel={()=>{this.modalCancel("modalVisible")}}
                footer={null}
            >
                <div>
                    这个是模态框显示的内容！
                </div>
            </Modal>
        )
    }

    /*********************1.模态框(包含底部按钮)*******************/
    motal_basic=()=>{
        return (
            <Modal
                className="motal_basic"
                title={this.state.modalTitle}
                visible={this.state.modalVisible}
                zIndex={1000}
                onOk={this.modalOK.bind(this)}
                onCancel={()=>{this.modalCancel("modalVisible")}}
            >
                <div>
                    这个是模态框显示的内容！
                </div>
            </Modal>
        )
    }
    componentDidMount(){
        
    }
    //显示模态框
    showModal(type){
        this.setState({
            modalVisible:true,
            modalTitle:type||"",
            modalType:type||""
        });
    }
    //点击ok按钮
    modalOK(){
        alert("点击确定按钮！");
    }
}
export default testModal;