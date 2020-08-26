import React,{ Component }from 'react';

import { Table, Tag} from 'antd';
import { Button } from 'antd';
//工具类
import { Divider } from 'antd';

const { Column, ColumnGroup } = Table;

/********************ant_table*********************
 *1.表格组件(声明式)
 *2.不推荐该方式，比较繁琐
 */
class Ant_table_html extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Ant_table_html",
            data:[],//表格数据
            columns:[],//表格列数据
            selectedRowKeys:["2"],//控制表格选中的行key
        }
    }
    //表格列配置
    table_columns=[
        {
            dataIndex:"key",//字段
            title:"序号",//字段标题
            align:"center",//列的对齐方式
        },
        {
            dataIndex: 'name',
            title:'姓名',
            align:"center",//列的对齐方式
        },
        {
            dataIndex: 'age',
            title: '年龄',
            align:"center",//列的对齐方式
        },
        {
            dataIndex: 'address',
            title: '住址',
            align:"center",//列的对齐方式
        },
        //操作列
        {
            title:"操作",
            align:"center",//列的对齐方式
            render:(row)=>{//格式化列函数(this指向组件对象)
                let rowStyle=row.age>40?{"color":"red"}:{"color":"blue"};
                return(
                    <span>
                        <a id="ck" style={rowStyle}>查看</a>
                        <Divider type="vertical" />{/* 分隔线 */}
                        <a id="sc" style={rowStyle}>删除</a>
                    </span>
                )
            }
        },
    ]
    //表格数据
    table_data=[
        {
            key:"1",//数据key,必须有否则报错
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key:'2',
            name: '胡彦斌',
            age: 42,
            address: '西湖区湖底公园1号',
        },
        {
            key:'3',
            name: '小红',
            age: 55,
            address: '西湖区湖底公园1号',
            isDisabled:true
        },
    ]
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

    //1.通过手动编写Table的columns创建列(比较繁琐)
    table_columns_method2(){
        return (
            <Table dataSource={this.state.data}>
                <Column title="序号" dataIndex="key"/>
                <Column title="姓名" dataIndex="name"/>
                <Column title="年龄" dataIndex="age"/>
                <Column title="地址" dataIndex="address"/>
                <Column title="操作" render={this.formatOperate.bind(this)}/>
            </Table>
        );
    }//e

    render(){
        console.log("*******render()******");
        this.row_checkbox.selectedRowKeys=this.state.selectedRowKeys;
        return(
            <div>
                <h2>{this.state.name}</h2><Divider/>
                <Button type="primary" onClick={this.addTableData.bind(this)}>添加表格数据</Button>
                <Button type="primary" onClick={this.clearTable.bind(this)}>清空表格数据</Button><Divider/>
                {this.table_columns_method2()}
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
        const data = [];
        for(let i = 0; i < 46; i++){
            data.push({
                key:i+1,
                name:`Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }
        this.setState({
            data:data,//表格数据
            columns:this.table_columns,
            selectedRowKeys:[]//清空选中行key
        });
    }
    //清空表格数据
    clearTable(){
        this.setState({
            data:[]
        });
    }
}
export default Ant_table_html;