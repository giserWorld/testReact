import React ,{ Component }from 'react';
import { Divider,Radio } from 'antd';
/*****************************ant_Radio**********************************
 *1.用于在多个备选项中选中单个状态。
 *2.和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多
 ********************typeFun*********************
 *1.radio_base():
 *2.radio_group():
 */
class ant_Radio extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_Radio",
            radio_Group:"广州",
            radio_value:""
        }
        this.typeFun=this.radio_base;//组件类型
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
    /*********************2.单选框组合RadioGroup*******************
    * 
    */
    radio_group=()=>{
        //radio垂直样式
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <>
                <Radio.Group 
                    value={this.state.radio_Group} //用于设置当前选中的值
                    onChange={this.handelChange_form.bind(this,"radio_Group")} //选项变化时的回调函数
                >
                    <Radio style={radioStyle} value="北京">北京</Radio>
                    <Radio style={radioStyle} value="上海">上海</Radio>
                    <Radio style={radioStyle} value="广州">广州</Radio>
                </Radio.Group>
            </>
        );
    }//e
    
    /*********************1.单个radio*******************
    *1.可实现与Radio.Group同样的效果
    */
    radio_base=()=>{
        return (
            <>
                <Radio
                    value="苹果"//用于设置当前选中的值
                    checked={this.state.radio_value==="苹果"?true:false} //指定当前是否选中
                    onClick={this.handelChange_form.bind(this,"radio_value")} //选项变化时的回调函数
                >苹果</Radio>
                 <Radio
                    value="桃子"//用于设置当前选中的值
                    checked={this.state.radio_value==="桃子"?true:false} //指定当前是否选中
                    onClick={this.handelChange_form.bind(this,"radio_value")} //选项变化时的回调函数
                >桃子</Radio>
                <Radio
                    value="栗子"//用于设置当前选中的值
                    checked={this.state.radio_value==="栗子"?true:false} //指定当前是否选中
                    onClick={this.handelChange_form.bind(this,"radio_value")} //选项变化时的回调函数
                >栗子</Radio>
            </>
        );
    }//e

    componentDidMount(){
          
    }
}
export default ant_Radio;
