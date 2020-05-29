import React ,{ Component }from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Anchor } from 'antd';
import { 
    UserOutlined, LaptopOutlined, NotificationOutlined,
    FundViewOutlined,BarChartOutlined,UserSwitchOutlined,
} from '@ant-design/icons';
import './left_menu.scss';
//左边菜单
const { SubMenu } = Menu;
const { Link } = Anchor;
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            defaultOpenKeys:["1"],
            defaultSelectedKeys:[],
            data:[
                {
                    key:1,
                    title:"地图表达",
                    icon:<FundViewOutlined/>,
                    anchor_link:"demo_layer",
                    children:[
                        {key:"item1",title:"图层",anchor_link:"demo_layer"},
                        {key:"item2",title:"图例",anchor_link:"demo_legend"},
                        {key:"item3",title:"样式",anchor_link:""}
                    ]
                },
                {
                    key:2,
                    title:"地图交互",
                    icon:<UserSwitchOutlined/>,
                    children:[
                        {key:"item5",title:"交互API"},
                        {key:"item6",title:"控件"},
                    ]
                },
                {
                    key:3,
                    title:"空间分析",
                    icon:<BarChartOutlined/>,
                    children:[
                       
                    ]
                },
            ],
        }
    }
    //滚动到锚点元素位置
    scrollToAnchor=(anchorId,event)=>{
        if(anchorId){
            // 找到锚点
            let anchorElement=document.getElementById(anchorId);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement){anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});}
        }
    }//e

    render(){
        return(
            <Menu
                className="page_menu"
                mode="inline"
                defaultOpenKeys={this.state.defaultOpenKeys}
                defaultSelectedKeys={this.state.defaultSelectedKeys}
                style={{ height: '100%', borderRight: 0 }}
            >
                {
                    this.state.data.map((item,idx)=>{
                        return (
                            <SubMenu key={item.key} title={item.title} icon={item.icon}>
                                {
                                    item.children.map((item2,idx2)=>{
                                        return (
                                            <Menu.Item key={item2.key}>
                                                <a onClick={this.scrollToAnchor.bind(this,item2.anchor_link)}>{item2.title}</a>
                                            </Menu.Item>
                                        );
                                    })
                                }
                            </SubMenu> 
                        );
                    })
                }
            </Menu>
        )
    }
    componentDidMount(){
        
    }
    
}
export default index;