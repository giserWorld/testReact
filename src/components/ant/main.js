import React ,{ Component }from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './css/main.scss';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class main extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"main"
        }
    }
    render(){
        return(
            <div className="wrap main">
                <Layout className="mainPage">
                    {/* 导航头 */}
                    <Header className="header page_Header">
                        地图API示例
                    </Header>
                    <Layout>
                        {/* 侧边栏 */}
                        <Sider className="site-layout-background page_Sider" width={250}>
                            <Menu
                                className="page_menu"
                                mode="inline"
                                defaultOpenKeys={['sub1']}
                                defaultSelectedKeys={[]}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu popupClassName="page_menu" key="sub1" icon={<UserOutlined />} title="subnav 1">
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout className="page_content">
                            <Content
                                className="site-layout-background"
                            >
                                中间
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