import React ,{ Component }from 'react';
import 'antd/dist/antd.css';
import './layout_main.scss';
import { Layout, Menu, Breadcrumb } from 'antd';
import qs from 'query-string';//urlParam工具
import Left_menu from '../../components/antDesign/component/left_menu/left_menu';
import MapDemo from '../../components/antDesign/component/mapDemo/mapDemo';

//主页面
const { Header, Content, Sider } = Layout;
class main extends Component{
    constructor(props){
        super(props);
        this.state={
            nav_title:"地图API示例",
        }
    }
    render(){
        return(
            <div className="wrap main">
                {/* 页面布局 */}
                <Layout className="mainPage">
                    {/* 导航头 */}
                    <Header className="header page_Header">
                        {this.state.nav_title}
                    </Header>
                    <Layout>
                        {/* 侧边栏 */}
                        <Sider className="site-layout-background page_Sider" width={250}>
                           <Left_menu></Left_menu>
                        </Sider>
                        {/* 中间区域 */}
                        <Layout className="page_content">
                            <Content className="site-layout-background">
                               <MapDemo></MapDemo>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
    componentDidMount(){
      var urlParam=this.getUrlParam();
      console.log("routerParam:",urlParam);  
    }
    /**************获取route路径urlParam对象***************
    */
    getUrlParam(){
        let location=this.props.location||{};//获取urlParam
        let urlParamStr=location.search||"";
        let urlParam=qs.parse(urlParamStr);//将urlParam转为param对象
        return urlParam;
    }//e
}
export default main;