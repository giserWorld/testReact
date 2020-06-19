import React ,{ Component }from 'react';
import { Divider } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
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
    onChange(date, dateString) {
        console.log(date, dateString);
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
                <div>
                    <Divider>类型1</Divider>
                    <DatePicker onChange={this.onChange} />
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
