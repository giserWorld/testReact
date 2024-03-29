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
import Ant_table_resizable from './ant_table_resizable';
import Ant_table_A4 from './ant_table_A4';
import Ant_table_tree from './ant_table_tree';
import Ant_DatePicker from './ant_DatePicker';
import Ant_AutoComplete from './ant_AutoComplete';
import Ant_Select_data from './ant_Select_data';
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
import Ant_Pagination from './ant_Pagination';
import Ant_Radio from './ant_Radio';
import Ant_InputNumber from './ant_InputNumber';
import Ant_Spin from './ant_Spin';
import Ant_Image from './ant_Image';
import Ant_Message from './ant_Message';
//sample demo
import sample_Anchor from './sample/test_Anchor';
import Table_Resizable from './sample/table_Resizable';

//router:"/ant"
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
              <Ant_table_data name="antViewer"/>
            </ConfigProvider>
        )
    }
}
export default antViewer;