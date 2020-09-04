import React ,{ Component }from 'react';
import { ConfigProvider } from 'antd';//ant 语言配置
import zhCN from 'antd/es/locale/zh_CN';//目前的默认文字是英文,如果需要使用其他语言,需要配置
//ant
import Ant_Grid from './ant_Grid';
import Test_Anchor from './ant_Anchor';
import Ant_table_html from './ant_table_html';
import Ant_table_data from './ant_table_data';
import Ant_table_qtfy from './ant_table_qtfy';
import Ant_table_htfy from './ant_table_htfy';
import Ant_table_config from './ant_table_config';
import Ant_DatePicker from './ant_DatePicker';
import Ant_AutoComplete from './ant_AutoComplete';
import Ant_Select from './ant_Select';
import Ant_tree_data from './ant_tree_data';
import Ant_Icon from './ant_Icon';
import Ant_Cascader from './ant_Cascader';
import Ant_Checkbox from './ant_Checkbox';
import Ant_Layout from './ant_Layout';
import Ant_Form from './ant_Form';
import Ant_modal from './ant_modal';
import Ant_Tabs from './ant_Tabs';
import Ant_Card from './ant_Card';
import Ant_Dropdown from './ant_Dropdown';
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
              <Ant_Form/>
            </ConfigProvider>
        )
    }
    componentDidMount(){
        
    }
    
}
export default antViewer;