import React ,{ Component }from 'react';
import { Divider } from 'antd';
import { Checkbox } from 'antd';
/*****************************ant_form_Checkbox**********************************
 *1.触发的函数尽量使用箭头函数,这样可以让"this"指针指向"组件对象"
 */
class ant_form_Checkbox extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_form_Checkbox",
            options:[//checkbox数据
                { label: '苹果', value: '1' },
                { label: '桃子', value: '2' },
                { label: '西瓜', value: '3' },
            ],
            checkedValues:["2","3"],//checkbox选中项
        }
    }
    //选中项(箭头函数)
    onChange=(checkedValues)=>{
        console.log('checked = ',checkedValues);//["2", "3"]
        this.setState({checkedValues});
    }

    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><Divider/>
                {/* 1.Checkbox 组 */}
                <Checkbox.Group 
                    options={this.state.options} 
                    value={this.state.checkedValues} 
                    onChange={this.onChange} 
                />
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_form_Checkbox;
