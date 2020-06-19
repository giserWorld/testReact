import React ,{ Component }from 'react';
import { ConfigProvider } from 'antd';//ant 语言配置
import zhCN from 'antd/es/locale/zh_CN';//目前的默认文字是英文,如果需要使用其他语言,需要配置
import Ant_Grid from './ant_Grid';
import Test_Anchor from './ant_Anchor';
import Ant_table from './ant_table';
import Ant_DatePicker from './ant_DatePicker';
//sample
import sample_Anchor from './sample/test_Anchor';
class antViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"antViewer"
        }
    }
    render(){
        return(
            <ConfigProvider locale={zhCN}>
              <Ant_DatePicker/>
            </ConfigProvider>
        )
    }
    componentDidMount(){
        
    }
    
}
export default antViewer;