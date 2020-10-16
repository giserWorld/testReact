import React,{ Component }from 'react';

import { Table, Tag} from 'antd';
import { Button } from 'antd';
import { Resizable } from 'react-resizable';
//工具类
import { Divider } from 'antd';

import * as data from './datas/table_data';
const { Column, ColumnGroup } = Table;

/********************ant_table表格单元格宽高*********************
 *1.表格字段width换行字数:
    1)"width:80":2个字
    2)"width:200":11个字
  *2.如果表格列字段中设置了有几个字段设置了固定宽度，其他字段没有设置
  则没有设置字段宽度的列会自动计算宽度(补充宽度)
  *3.当单元格中内容只出现在一行是单元格的默认高度为"55px",每次换行单元格高度增加"22px"(任何情况)
 */


class ant_table_test extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_table_data",
            data:[],//表格数据
            columns:[],//表格列数据
        }
    }
    //表字段
    table_columns=[
        {
            dataIndex:"key",//字段
            title:"序号",//字段标题
            //align:"center",//列的对齐方式
            width:80,//字段宽度
        },
        {
            dataIndex: 'name',
            title:'姓名',
            //align:"center",//列的对齐方式
            width:undefined,//字段宽度
        },
        {
            dataIndex: 'age',
            title: '年龄',
            //align:"center",//列的对齐方式
            width:100,//字段宽度
        },
        {
            dataIndex: 'address',
            title: '住址',
            //align:"center",//列的对齐方式
            width:200,//字段宽度
        }
    ];
    //表数据
    table_data=[
        {
            key:"1",//数据key,必须有否则报错
            name: '胡彦斌',
            age: "77px",
            address: '西湖区湖底西湖区湖底西湖',//12
        },
        {
            key:'2',
            name: '胡彦斌',
            age: "55px",
            address: '西湖a区湖底公园1号',//10
        },
        {
            key:'3',
            name: '小红',
            age: "55px",
            address: '',//0
            isDisabled:true
        },
    ]
    render(){
        console.log("table_columns:",this.table_columns);
        let dataLength=this.table_data.map((item,idx)=>{
            return item.address.length;
        });
        console.log("data_row长度:",dataLength);
        return(
            <div className="tableDiv" style={{width:"210mm",height:"296mm",margin:"20px"}}>
                <Table 
                    columns={this.table_columns}//表格列配置
                    dataSource={this.table_data}//表格数据
                    bordered={true}//是否显示单元格边框
                    pagination={false}//分页插件
                />
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default ant_table_test;