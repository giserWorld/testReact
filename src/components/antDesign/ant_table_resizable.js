import React,{ Component }from 'react';

import { Table, Tag} from 'antd';

//工具类
import { Divider } from 'antd';
import * as data from './datas/table_data';
import ResizableTd from '../react/customPlugins/resizableTd';
import './css/antStyle_my.scss';
/********************可伸缩列表格*********************
 *1.直接使用组件可伸缩列没有效果，需要添加特定的样式到该组件上
 */
class ant_table_resizable extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_table_resizable",
            tableColumns:data.table_columns,//表格字段
        }
    }
    //覆盖默认的table元素
    components={
        header:{//表头部分
          cell:ResizableTd,//将表头单元格对象传给ResizableTd组件
        },
        body:{//表体部分
            //cell:ResizableTd
        }
    }//e2

    /********************格式化字段列*********************
     *1.
    */
    fmtColumnsFun=(columns)=>{
        let newColumns=[];
        if(columns&&columns.length>0){
            columns.map((column,idx)=>{
                newColumns.push({
                    ...column,
                    onHeaderCell:(column)=>({//标题单元格
                        width:column.width||100,
                        onResize: this.handleResize(idx),
                    }),
                }); 
            });
        }
        return newColumns;
    }//e

    //单元格大小调整回调
    handleResize=(fieldIdx)=>(e,resizeObj)=>{
        this.setState((oldState)=>{
          const nextColumns = [...oldState.tableColumns];
          nextColumns[fieldIdx] = {
            ...nextColumns[fieldIdx],
            width:resizeObj.size.width,
          };
          return {tableColumns:nextColumns };//更新表格列
        });
    }//e

    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><Divider/>
                <Table 
                    style={{width:"1000px"}}
                    columns={this.fmtColumnsFun(this.state.tableColumns)}//表格列配置
                    dataSource={data.table_data1}//表格数据
                    bordered={true}//是否显示单元格边框
                    pagination={false}//分页插件
                    components={this.components}//覆盖默认的 table 元素
                />
            </div>
        )
    }
}
export default ant_table_resizable;