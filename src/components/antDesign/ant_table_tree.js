import React,{ Component }from 'react';

import { Table, Tag} from 'antd';
import { Button } from 'antd';
//工具类
import { Divider } from 'antd';
import * as data from './datas/table_data';

/********************ant_table_tree*********************
 *1.如果表格字段配置包含子列，常规数据结构，则会出现列字段的嵌套
 *2.如果表格字段配置为常规列，嵌套数据结构，则会出现树形表格
 *3.树形表格的每条数据必须包含key属性,并且有唯一的属性值，否则会有问题
 *4.row数据中的children属性可以为null,当children为null时,则表格将忽略该属性
 */


class ant_table_tree extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_table_tree",
            tableColumns:[],//表格列数据
            tableRows:[],//表格行数据
            selectedRowKeys:["2"],//控制表格选中的行key
            expandedRowKeys:[],
        }
    }
    //行checkbox配置
    row_checkbox={
        onChange:(selectedRowKeys,selectedRows)=>{//表格checkbox状态改变时触发
          this.setState({ selectedRowKeys });
          console.log("**********Ids***********",selectedRowKeys);
          console.log("**********rows***********",selectedRows);
        },
        getCheckboxProps:(row)=>{//判断是否禁用checkbox选择框(设置checkbox属性)
           return ({
             disabled:row.isDisabled==true?true:false,
          })
        },
        selectedRowKeys:[],//设置talble checkbox选中的数据key
    }//e

    rowExpandable=(record)=>{
        return true;
    }//e

    clickFun=()=>{
        this.setState({
            tableColumns:data.columns_tree,//表格列数据
            tableRows:data.data_tree,//表格行数据
        });  
    }
    render(){
        console.log("*******render()******");
        this.row_checkbox.selectedRowKeys=this.state.selectedRowKeys;
        return(
            <div>
                <h2>{this.state.name}</h2><Divider/>
                <div>
                    <button onClick={this.clickFun}>请求数据</button><p/>
                </div>
                <div className="tableTree" style={{margin:"20px"}}>
                    <Table 
                        style={{width:"1000px"}}
                        //rowSelection={this.row_checkbox}//行checkbox配置
                        columns={this.state.tableColumns}//表格列配置
                        dataSource={this.state.tableRows}//表格数据
                        bordered={true}//是否显示单元格边框
                        expandable={{//配置展开属性
                            defaultExpandAllRows:true,//初始时，是否展开所有行
                            //expandedRowKeys:this.state.expandedRowKeys//展开的行key
                            //defaultExpandedRowKeys:["10"],
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default ant_table_tree;