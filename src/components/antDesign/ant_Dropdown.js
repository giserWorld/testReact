import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类
import { Menu, Dropdown, Button, message,Checkbox} from 'antd';
import { createFromIconfontCN,DownOutlined } from '@ant-design/icons';

/*****************************ant_Dropdown**********************************
 *1.向下弹出的列表
 *2.当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令
 ********************typeFun*********************
 *1.dropdown_base():
 *2.dropdown_custom():
 */
class ant_Dropdown extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Dropdown",
            visible:false,
        }
        //组件类型
        this.typeFun=this.dropdown_custom;
    }
    handleVisibleChange = flag => {
        this.setState({ visible: flag });
    };
    onChange(e){
        console.log(e.target.name);
    }

    /*********************2.自定义下拉菜单*******************
     * 
    */
    dropdown_custom=()=>{
        let menu=(
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
                    飞行漫游
                </Menu.Item>
            </Menu>      
        );
        return (
            <>
                <Dropdown 
                    overlay={menu}
                    trigger={["click"]}
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                >
                    <Button>工具栏<DownOutlined /></Button>
                </Dropdown>
            </>
        );
    }//e

    /*********************1.基础下拉菜单*******************
     * 
    */
    dropdown_base=()=>{
        let menu=(
            <Menu>
                <Menu.Item key="1">
                  菜单1
                </Menu.Item>
                <Menu.Item key="2">
                  菜单2
                </Menu.Item>
                <Menu.Item key="3">
                  菜单3
                </Menu.Item>
            </Menu>
        );
        return (
            <>
               <Dropdown 
                    overlay={menu}//下拉菜单
                    trigger={["click"]}//触发条件
                >
                    <Button>下拉菜单<DownOutlined /></Button>
                </Dropdown>
            </>
        );
    }//e
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr></hr>
                {this.typeFun()}
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default ant_Dropdown;