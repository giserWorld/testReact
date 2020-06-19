/**************************TreeSelect树选择************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

import * as antd from 'antd';
const { TreeSelect } = antd;


//地图组件
class TreeSelectCom extends Component{
    name="ant树形控件组件";
    state={//状态数据
        treeData:[],//树结构数据
        value: undefined,
      
    }
    onChange = value => {
        console.log(value);
        this.setState({ value });
    };
    render(){
        return(
            <div className="wrap">
                <TreeSelect
                    style={{ width:250 }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={this.state.treeData}
                    placeholder="请选择区域"
                    onChange={this.onChange}
                    ref="TreeSelect"
                />
            </div>
        )
    }
    componentDidMount(){
        
    }
    initMapData(data){
        if(data){
            this.setState({treeData:data})
        }
    }
    close_blur(){
        this.refs.TreeSelect.blur();
    }
}
export default TreeSelectCom;//将组件暴露出去