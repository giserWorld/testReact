import React ,{ Component }from 'react';
import { Divider } from 'antd';
import { DatePicker } from 'antd';
import 'moment/locale/zh-cn';//moment中文包
const { RangePicker } = DatePicker;//时间范围选择器
/*****************************时间选择器**********************************
 *1.
 */
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"日期选择框",
        }
    }
    onChange(moment, dateString) {
        console.log(moment,dateString);
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
                <div>
                    <Divider>类型1</Divider>
                    <DatePicker onChange={this.onChange} />
                    <Divider>类型2</Divider>
                    <RangePicker />
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
