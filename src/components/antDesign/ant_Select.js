import React ,{ Component }from 'react';
import { Select } from 'antd';
const { Option } = Select;
/*****************************Select下拉框**********************************
 *1.
 */
class ant_Select extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_Select",
            options:[
                {name:"dd",value:"123"},
                {name:"dd2",value:"dd"},
                {name:"f2",value:"qq"},
                {name:"g",value:"ww"},
                {name:"hh",value:"ee"},
                {name:"hh2",value:"rr"},
                {name:"88",value:"tt"},
                {name:"99",value:"yy"},
                {name:"qq",value:"55"},
                {name:"ww",value:"88"},
            ]
        }
    }
    /**************select值发生改变**************
    *参数:value(String):select选中的值
    ******option(Object):选中的数据对象
    **/
    handleChange_select=(value,option)=>{
        console.log(`selected ${value}`);
        console.log(`option ${option}`);
    }//e

    onSearch(val) {
        console.log('search:', val);
    }
    //option选中
    onSelect(value,option){
        console.log('value:', value);
        console.log('option:', option);
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
                <Select
                    showSearch
                    allowClear={true}
                    optionFilterProp="children"
                    onChange={this.handleChange_select}
                    onSearch={this.onSearch}
                    onSelect={this.onSelect}
                    placeholder="请选择数据"
                    style={{ width: 200 }}
                >
                    {
                        this.state.options.map((item,idx) => {
                            return <Option key={idx} value={item.value}>{item.name}</Option>
                        })
                    }
                </Select>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_Select;
