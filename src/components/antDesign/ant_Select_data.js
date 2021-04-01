import React ,{ Component }from 'react';
import { Select } from 'antd';
const { Option } = Select;
/*****************************ant_Select下拉选择框**********************************
 *1.下拉选择器
 *2.组件(编程式),推荐使用该方式，简单实用 
 */
class ant_Select_data extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_Select_data",
            selectValue:"",
            options:[
                {label:"dd",value:"123"},
                {label:"dd2",value:"dd"},
                {label:"f2",value:"qq"},
                {label:"g",value:"ww"},
                {label:"hh",value:"ee"},
                {label:"hh2",value:"rr"},
                {label:"88",value:"tt"},
                {label:"99",value:"yy"},
                {label:"qq",value:"55"},
                {label:"ww",value:"88"},
            ]
        }
    }
    /**************select值发生改变**************
    *参数:value(String):select选中的值
    ******option(Object):选中的数据对象
    **/
    handleChange_select=(value,option)=>{
        this.setState({
            selectValue:value 
        });
        console.log("selected:",value);
        console.log("option:",option);
    }//e

    onSearch(val) {
        console.log('search:', val);
    }
    //option选中
    onSelect(value,option){
        console.log('value:', value);
        console.log('option:', option);
    }
    clickFun=()=>{
        this.setState({
            selectValue:"qq"
        });
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><hr/>
                <button onClick={this.clickFun}>选中option值</button><p/>
                <Select
                    style={{ width: 200 }}
                    options={this.state.options} //数据化配置选项内容
                    placeholder="请选择数据"
                    // showSearch
                    // allowClear={true}
                    // optionFilterProp="children"
                    onChange={this.handleChange_select}
                    value={this.state.selectValue}
                    // onSearch={this.onSearch}
                    // onSelect={this.onSelect}
                />
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_Select_data;
