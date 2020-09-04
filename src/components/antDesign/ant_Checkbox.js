import React ,{ Component }from 'react';
import { Divider } from 'antd';
import { Checkbox } from 'antd';

/*****************************ant_Checkbox**********************************
 *1.触发的函数尽量使用箭头函数,这样可以让"this"指针指向"组件对象"
 ********************typeFun*********************
 *1.checkbox_one():
 *2.checkbox_Group():
 */
class ant_Checkbox extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_form_Checkbox",
            checkedValues:["2"],//checkbox组选中项
            options:[//checkbox数据
                { label: '苹果', value: '1' },
                { label: '桃子', value: '2' },
                { label: '西瓜', value: '3' },
            ],
           
        }
        this.typeFun=this.checkbox_one;//组件类型
    }
    //选中项(箭头函数)
    checkboxGroupFun=(checkedValues)=>{
        this.setState({checkedValues});
        console.log('checked = ',checkedValues);//["2", "3"]
    }//e
    //单个checkbox
    checkboxOneFun=(evt)=>{
        let _self=this;
        let status=evt.target.checked;
        let value=evt.target.value;
        console.log("checkbox:",evt);
    }//e

    /*********************2.Checkbox组*******************
     * 
    */
    checkbox_Group=()=>{
        return (
            <>
                <Checkbox.Group 
                    options={this.state.options} 
                    value={this.state.checkedValues}//checkbox选中项 
                    onChange={this.checkboxGroupFun} 
                />
            </>
        );
    }//e

    /*********************1.单个Checkbox*******************
     * 
    */
    checkbox_one=()=>{
        return (
            <>
                <Checkbox onChange={this.checkboxOneFun} value="苹果">苹果</Checkbox>
            </>
        );
    }//e

    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><Divider/>
                {this.typeFun()}
            </div>
        )
    }
}
export default ant_Checkbox;
