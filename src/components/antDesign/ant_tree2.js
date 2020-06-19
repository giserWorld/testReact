/**************************ant树形控件组件************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

import { Tree } from 'antd';
const { TreeNode } = Tree;

//树节点结构数据
let treeData = [
    {//根节点
        title: '1', 
        key:"1",
        children:[
            {
                title: '1.1',
                key: '1.1',
                children: [
                  { title: '1.1.1', key: '1.1.1' },
                  { title: '1.1.2', key: '1.1.2' },
                  { title: '1.1.3', key: '1.1.3' },
                ],
            },
            {
                title: '1.2',
                key: '1.2',
                children:[

                ]
            },
        ]  
    },
];

//地图组件
class treeControl2 extends Component{
    name="ant树形控件组件";
    state={//状态数据
        treeData:[],//树结构数据
        showLine:true,//是否展示连接线
        expandedKeys: [],//初始化时展开的节点
        autoExpandParent: true,//是否自动展开父节点
        checkedKeys: [],//选中复选框的树节点
        selectedKeys: [],//设置选中的树节点
      
    }
    onExpand = expandedKeys => {//展开/收起节点时触发
        console.log('onExpand', expandedKeys);
        this.setState({
          expandedKeys,
          autoExpandParent: false,
        });
    };

    onCheck = checkedKeys => {//点击复选框触发
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    };
    
    onSelect = (selectedKeys, info) => {//点击树节点触发
        console.log('onSelect', info);
        this.setState({ selectedKeys });
    };

    renderTreeNodes = data =>{
        var res=data.map(item => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} />;
        });
        return res;
    }
    render(){
        return(
            <div className="wrap">
                <Tree
                    checkable={false}
                    draggable={true}
                    showLine={this.state.showLine}
                    onExpand={this.onExpand}
                    expandedKeys={this.state.expandedKeys}
                    autoExpandParent={this.state.autoExpandParent}
                    onCheck={this.onCheck}
                    checkedKeys={this.state.checkedKeys}
                    onSelect={this.onSelect}
                    selectedKeys={this.state.selectedKeys}
                >
                    {this.renderTreeNodes(this.state.treeData)}
                </Tree>
            </div>
        )
    }
    componentDidMount(){
        
    }
    addTreesj(sj){
        if(sj){
            this.setState({treeData:[sj]})
        }
    }
}
export default treeControl2;//将组件暴露出去