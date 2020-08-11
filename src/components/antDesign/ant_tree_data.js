import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类
import { Tree } from 'antd';
import { BlockOutlined } from '@ant-design/icons';
const { TreeNode } = Tree;
/*****************************ant树形控件**********************************
 *1.编程方式
 *2.推荐
 */

//树节点结构数据
let treeData = [
    {//根节点
        title: '图层', 
        key:"1",
        checkable:false,
        children:[
            {
                title: '1.1',
                key: '1.1',
                children: [
                  { title: '1.1.1', key: '1.1.1',checkable:true,icon: <BlockOutlined />},
                  { title: '1.1.2', key: '1.1.2' ,icon: <BlockOutlined />},
                  { title: '1.1.3', key: '1.1.3' ,icon: <BlockOutlined />},
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

class ant_tree extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant树节点",
            showLine:false,//是否展示连接线
            autoExpandParent:true,//是否自动展开父节点
            draggable:true,//节点是否可拖拽
            checkable:true,//是否显示多选框
            showIcon:true,//是否显示图标，默认false
            expandedKeys: ["1"],//初始化时默认展开的树节点
            checkedKeys: ["1.1.2"],//选中复选框的树节点
            selectedKeys: [],//设置选中的树节点
            treeData:[]
        }
    }
    //点击展开/收起节点时触发
    onExpand =(expandedKeys,obj) => {
        console.log('onExpand', expandedKeys);
        this.setState({
            expandedKeys:expandedKeys,
            autoExpandParent:false,
        });
    }
    //点击复选框触发
    onCheck=(checkedKeys) => {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    }//e
    //点击树节点触发
    onSelect = (selectedKeys,info) => {
        console.log('onSelect', info);
        this.setState({ selectedKeys });
    }//e
    //拖入到新树节点位置时触发
    onDropFun=(info,node)=>{
        console.log(info);
        const dropKey = info.node.key;//拖入某节点之后的节点key
        const dragKey = info.dragNode.key;//拖动的树节点key
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        const loop = (data, key, callback) => {
            for (let i = 0; i < data.length; i++) {
              if (data[i].key === key) {
                return callback(data[i], i, data);
              }
              if (data[i].children) {
                 loop(data[i].children, key, callback);
              }
            }
        };
        const data = [...this.state.treeData];//复制数组
        let dragObj;
        //查找拖动树节点对象
        loop(data,dragKey,(item, index, arr) => {
            arr.splice(index,1);
            dragObj = item;
        });
        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, item => {
              item.children = item.children || [];
              // where to insert 示例添加到尾部，可以是随意位置
              item.children.push(dragObj);
            });
        } 
        else if (
            (info.node.children || []).length > 0 && // Has children
            info.node.expanded && // Is expanded
            dropPosition === 1 // On the bottom gap
          ) {
            loop(data, dropKey, item => {
              item.children = item.children || [];
              // where to insert 示例添加到头部，可以是随意位置
              item.children.unshift(dragObj);
            });
        } 
        else {
            let ar;
            let i;
            loop(data, dropKey, (item, index, arr) => {
              ar = arr;
              i = index;
            });
            if (dropPosition === -1) {
              ar.splice(i, 0, dragObj);
            }
            else {
              ar.splice(i + 1, 0, dragObj);
            }
        }
        this.setState({treeData: data});//更新树节点数据
    }//e

    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
                <Tree
                    style={{border:"1px solid red",width:"300px"}}
                    checkedKeys={this.state.checkedKeys}
                    checkable={this.state.checkable}
                    showLine={this.state.showLine}
                    draggable={this.state.draggable}
                    showIcon={this.state.showIcon}
                    autoExpandParent={this.state.autoExpandParent}
                    expandedKeys={this.state.expandedKeys}
                    treeData={this.state.treeData}
                    onExpand={this.onExpand}
                    onCheck={this.onCheck}
                    onSelect={this.onSelect}
                    onDrop={this.onDropFun}
                />
                <hr/>
                <button onClick={this.addTreesj}>添加树节点数据</button>
            </div>
        )
    }
    componentDidMount(){
        
    }
    //更新树节点数据
    addTreesj=()=>{
        this.setState({
            treeData:treeData,
            expandedKeys:["1","1.1"],
        })
    }
}
export default ant_tree;