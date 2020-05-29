import React ,{ Component }from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './css/main.scss';
//import index. from './';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class main extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"main",
            nav_title:"地图API示例",
            menuList:[
                {
                    key:1,
                    name:"基础底图",
                    children:[
                        {title:"在线地图"},
                        {title:"地形"},
                        {title:"地形2"}
                    ]
                }
            ],
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
                            侧边区域
                        </Sider>
                        <Layout className="page_content">
                            <Content className="site-layout-background">
                                中间区域
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
    componentDidMount(){
        
    }
    
}
export default main;