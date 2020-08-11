import React ,{ Component }from 'react';
import { Layout } from 'antd';
import './css/antStyle_my.scss';//ant自定义样式
const { Header, Footer, Sider, Content } = Layout;


/*****************************ant_Layout**********************************
 *1.布局组件,进行页面级整体布局
 *2.
 */
class ant_Layout extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_Layout",
        }
    }
    //1.上、中、下布局
    layout1=(
        <Layout className="layout_container">{/* 布局容器 */}
            {/* 上方区域 */}
            <Header style={{border:"1px solid red"}}>
                Header
            </Header>
            {/* 中间区域 */}
            <Content style={{border:"1px solid #12F17A"}}>
                Content
            </Content>
            {/* 下方区域 */}
            <Footer style={{border:"1px solid #12E6F1"}}>
                Footer
            </Footer>
        </Layout>
    );
    //2.上、中(左右)、下布局
    layout2=(
        <Layout className="layout_container">{/* 布局容器 */}
            {/* 上方区域 */}
            <Header style={{border:"1px solid red"}}>
                Header
            </Header>
            {/* 中间区域 */}
            <Layout style={{border:"1px solid blue"}}>
                <Sider style={{border:"1px solid #EF12F1"}}>Sider</Sider>{/* 中左区域 */}
                <Content style={{border:"1px solid #12F17A"}}>Content</Content>{/* 中右区域 */}
            </Layout>
            {/* 下方区域 */}
            <Footer style={{border:"1px solid #12E6F1"}}>
                Footer
            </Footer>
        </Layout>
    );
    //3.左、右(上中下)布局
    layout3=(
        <Layout className="layout_container">{/* 布局容器 */}
            <Sider style={{border:"1px solid red"}}>
                Sider
            </Sider>
            <Layout>
                <Header style={{border:"1px solid yellow"}}>Header</Header>
                <Content style={{border:"1px solid blue"}}>Content</Content>
                <Footer style={{border:"1px solid #12E6F1"}}>Footer</Footer>
            </Layout>
        </Layout>
    );
    render(){
        return(
            <div className="wrap ant_Layout">
                {this.layout3}
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_Layout;
