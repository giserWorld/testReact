/**************************ant树形控件组件************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类
import { Menu, Dropdown, Button, Icon, message,Checkbox} from 'antd';

class Dropdown_my extends Component{
    state={
        name:"Dropdown",
        visible:false,
    }
    constructor(props){
        super(props);
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
                    <Checkbox onChange={this.onChange} name="指南针">指南针</Checkbox>
                </Menu.Item>
                <Menu.Item key="3">
                    <Checkbox onChange={this.onChange} name="缩放控件">缩放控件</Checkbox>
                </Menu.Item>
                <Menu.Item key="4">
                    <Checkbox onChange={this.onChange} name="比例尺">比例尺</Checkbox>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="5">
                    <Icon type="rocket" />
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
                    <Button>
                        <Icon type="unordered-list" />
                        工具栏
                        <Icon type="down"/>
                    </Button>
                </Dropdown>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default Dropdown_my;//将组件暴露出去