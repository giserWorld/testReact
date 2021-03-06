import React,{ Component }from 'react';

import { Table, Tag} from 'antd';
import { Button } from 'antd';
import { Resizable } from 'react-resizable';
//工具类
import { Divider } from 'antd';

import * as data from './datas/table_data';
const { Column, ColumnGroup } = Table;

/********************ant_table*********************
 *1.表格组件(编程式) 
 *2.推荐使用该方式，简单实用
 *3.如果表格字段配置包含子列，常规数据结构，则会出现列字段的嵌套
 *4.如果表格字段配置为常规列，嵌套数据结构，则会出现树形表格
 *5.树形表格的每条数据必须包含key属性,并且有唯一的属性值，否则会有问题
 ********************tableTypeFun*********************
 *1.table_custom():自定义表头
 */


class ant_table_data extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_table_data",
            tableColumns:data.table_columns,//表格列数据
            tableRows:data.table_data1,//表格数据
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
    };
    rowExpandable=(record)=>{
        return true;
    }//e


    render(){
        console.log("*******render()******");
        this.row_checkbox.selectedRowKeys=this.state.selectedRowKeys;
        return(
            <div>
                <h2>{this.state.name}</h2><Divider/>
                <Button type="primary" onClick={this.control_filter}>控制表格字段</Button><p/>
                <Button type="primary" onClick={this.addTableData.bind(this)}>添加表格数据</Button><p/>
                <Button type="primary" onClick={this.clearTable.bind(this)}>清空表格数据</Button><Divider/>
                <div className="tableDiv">
                    <Table 
                        style={{width:"1000px"}}
                        //rowSelection={this.row_checkbox}//行checkbox配置
                        columns={this.state.tableColumns}//表格列配置
                        dataSource={this.state.tableRows}//表格数据
                        bordered={true}//是否显示单元格边框
                        expandable={{
                            //defaultExpandAllRows:true
                        }}
                    />
                </div>
            </div>
        )
    }

    //格式化列函数(this指向组件对象)
    formatOperate(row){
        let rowStyle=row.age>40?{"color":"red"}:{"color":"blue"};
        return(
            <span>
                <a id="ck" style={rowStyle}>查看</a>
                <Divider type="vertical" />{/* 分隔线 */}
                <a id="sc" style={rowStyle}>删除</a>
            </span>
        )
    }
    //添加表格数据
    addTableData(){
        //模拟表格数据
        const dataTemp = [];
        for(let i = 0; i < 46; i++){
            dataTemp.push({
                key:i+1,
                name:`Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }
        this.setState({
            columns:data.table_columns,
            data:data.table_data1,//表格数据
            selectedRowKeys:[]//清空选中行key
        });
    }
    //清空表格数据
    clearTable(){
        this.setState({
            data:[],
            selectedRowKeys:[]//清空选中行key
        });
    }
}
export default ant_table_data;