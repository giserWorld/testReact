import React,{ Component }from 'react';

import { Table, Tag} from 'antd';
import { Button } from 'antd';
//工具类
import { Divider } from 'antd';

import * as data from './datas/table_data';
const { Column, ColumnGroup } = Table;

/********************ant_table*********************
 *1.表格组件(编程式) 
 *2.推荐使用该方式，简单实用
 *3.如果表格字段配置包含子列，常规数据结构，则会出现列字段的嵌套
 *4.如果表格字段配置为常规列，嵌套数据结构，则会出现树形表格
 */
class ant_table_data extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_table_data",
            data:[],//表格数据
            columns:[],//表格列数据
            selectedRowKeys:["2"],//控制表格选中的行key
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

    //*****************1.基础表格******************//
    table_base=()=>{
        let columns=data.table_columns_multiField;
        let dataSource=data.table_data2;
        return (
            <>
                <Table 
                    style={{width:"1000px"}}
                    //rowSelection={this.row_checkbox}//行checkbox配置
                    columns={columns}//表格列配置
                    dataSource={dataSource}//表格数据
                    bordered={true}//是否显示单元格边框
                />
            </>
        );
    }//e

    //*****************2.树形表格******************//
    table_tree=()=>{
        let columns=data.columns_tree;
        let dataSource=data.data_tree;
        return (
            <>
                <Table 
                    style={{width:"1000px"}}
                    //rowSelection={this.row_checkbox}//行checkbox配置
                    columns={columns}//表格列配置
                    dataSource={dataSource}//表格数据
                    bordered={true}//是否显示单元格边框
                />
            </>
        );
    }//e


    render(){
        console.log("*******render()******");
        this.row_checkbox.selectedRowKeys=this.state.selectedRowKeys;
        return(
            <div>
                <h2>{this.state.name}</h2><Divider/>
                <Button type="primary" onClick={this.addTableData.bind(this)}>添加表格数据</Button><p/>
                <Button type="primary" onClick={this.clearTable.bind(this)}>清空表格数据</Button><Divider/>
                {this.table_tree()}
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
    componentDidMount(){
        this.setState({
            data:this.table_data,//表格数据
            columns:this.table_columns//表格列
        });
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