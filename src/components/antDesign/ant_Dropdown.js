import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类
import { Menu, Dropdown, Button, message,Checkbox} from 'antd';
import { createFromIconfontCN,DownOutlined } from '@ant-design/icons';

class Dropdown_my extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Dropdown",
            visible:false,
        }
    }
    handleVisibleChange = flag => {
        this.setState({ visible: flag });
    };
    onChange(e){
        console.log(e.target.name);
    }
    menu=()=>{
        return (
            <Menu>
                <Menu.Item key="1">
                   基础控件:
                </Menu.Item>
                <Menu.Item key="2">
                    指南针
                    <Checkbox onChange={this.onChange} name="指南针"></Checkbox>
                </Menu.Item>
                <Menu.Item key="3">
                    缩放控件
                    <Checkbox onChange={this.onChange} name="缩放控件"></Checkbox>
                </Menu.Item>
                <Menu.Item key="4">
                    比例尺
                    <Checkbox onChange={this.onChange} name="比例尺"></Checkbox>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="5">
                    飞行漫游
                </Menu.Item>
            </Menu>
        );
    }
    render(){
        return(
            <div id="components-dropdown-demo-dropdown-button">
                <Dropdown 
                    overlay={this.menu}
                    trigger={["click"]}
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                >
                    <Button>工具栏<DownOutlined /></Button>
                </Dropdown>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default Dropdown_my;//将组件暴露出去