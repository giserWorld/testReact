/**************************ant树形控件组件************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

import { Tree } from 'antd';
const { TreeNode } = Tree;

//地图组件
class treeControl extends Component{
    name="ant树形控件";
    state={
           
    }
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };
    
    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className="wrap">
                <Tree
                    checkable
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                >
                    <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-0-0" disabled>
                        <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                        <TreeNode title="leaf" key="0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1">
                        <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                    </TreeNode>
                    </TreeNode>
                </Tree>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default treeControl;//将组件暴露出去