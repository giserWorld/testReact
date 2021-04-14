import React ,{ Component }from 'react';
import { Modal, Button } from 'antd';

/**************************模态框**********************
 *1.模态框
 *2.常用属性:
    <Modal
       footer={null}//是否显示底部内容 
    />
 ********************typeFun*********************
 *1.motal_basic:基础模态框
 *2.motal_noFoot:模态框(无底部按钮)
 *3.motal_noFoot:模态框(无底部按钮,点击蒙版不关闭)
 **/
class ant_modal extends Component{  
    constructor(props){
        super(props);
        this.state={
            name:"模态框",
            modalVisible:true,//显示状态
            modalTitle:"模态框标题",//模态框标题
            modalType:""
        }
        this.typeFun=this.motal_basic;//组件类型
    }//e

    /*********************3.模态框(无底部按钮,点击蒙版不关闭)*******************
    *1.模态框(无底部按钮,点击蒙版不关闭) 
    */
   motal_noAutoClose=()=>{
        return (
            <>
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
            </>
        );
    }//e

    /*********************2.模态框(无底部按钮)*******************
    *1.模态框无底部按钮
    *2. 
    */
   motal_noFoot=()=>{
        return (
            <>
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
            </>
        );
    }//e


    /*********************1.基础模态框*******************
    *1.模态框包含"底部按钮"、
    */
    motal_basic=()=>{
        return (
            <>
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
            </>
        );
    }//e

    render(){
        return(
            <div className="wrap myModal">
                <h1>{this.state.name}</h1>
                {this.typeFun()}
            </div>
        )
    }//e

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
export default ant_modal;