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
                <Button type="primary" onClick={this.showModal.bind(this,"motal_basic")}>模态框(底部按钮)</Button><p/>
                <Button type="primary" onClick={this.showModal.bind(this,"motal_noFoot")}>模态框(无底部按钮)</Button><p/>
                <Button type="primary" onClick={this.showModal.bind(this,"motal_noAutoClose")}>模态框(无底部按钮)</Button><p/>
            </div>
        )
    }
    /*********************3.模态框(无底部按钮,mask蒙版不关闭)*******************/
    motal_noAutoClose=()=>{
        return (
            <Modal
                title={this.state.modalTitle}
                visible={this.state.modalVisible}
                zIndex={1000}
                onCancel={this.modalCancel.bind(this)}
                footer={null}
                maskClosable={false}
            >
                <div>
                    这个是模态框显示的内容！
                </div>
            </Modal>
        )
    }
    /*********************2.模态框(不无底部按钮)*******************/
    motal_noFoot=()=>{
        return (
            <Modal
                title={this.state.modalTitle}
                visible={this.state.modalVisible}
                zIndex={1000}
                onCancel={this.modalCancel.bind(this)}
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
                title={this.state.modalTitle}
                visible={this.state.modalVisible}
                zIndex={1000}
                onOk={this.modalOK.bind(this)}
                onCancel={this.modalCancel.bind(this)}
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
    //关闭模态框
    modalCancel(){
        this.setState({modalVisible:false});
    }
    //点击ok按钮
    modalOK(){
        alert("点击确定按钮！");
    }
}
export default testModal;