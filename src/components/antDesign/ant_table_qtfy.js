import React,{ Component }from 'react';

import { Table, Divider, Tag} from 'antd';
import { Button } from 'antd';

/********************table前台分页*********************
 *1.前台分页:前台一次性请求所有数据，表格显示时以分页形式显示
 *2. 
 */
class ant_table_qt extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_table(前台分页)",
            data:[],//表格数据
            columns:[],//表格列数据
            selectedRowKeys:[2],//控制表格选中的行key
        }
    }
    //表格列配置对象
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
    //选中行checkbox配置
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
    //pagination组件配置
    pagination={
        position:"bottom",//分页器显示位置
        defaultCurrent:1,//默认的每页条数,默认为1
        defaultPageSize:5,//默认的每页条数,默认为10
        simple:false,//显示为简单分页,分页只显示当前页面数和总页数,如:"1/10"，默认false
        hideOnSinglePage:true,//只有一页时是否隐藏分页器,默认为false
        //pageSize:10,//每页条数(手动控制页数),"pageSize"属性优先于"defaultPageSize"
        //current:1,//当前页数(手动控制页码),"current"属性优先于"defaultPageSize"
        //pageSizeOptions:['10','20','30','40'],//指定每页可以显示多少条,配合showSizeChanger使用
        showSizeChanger:true,//是否可以改变 pageSize,配合pageSizeOptions使用
        showQuickJumper:true,//是否可以快速跳转至某页
        // showTotal:(total,range)=>{//用于显示数据总量和当前数据顺序,每次页面改变则调用该函数
        //     //return range[0]+"~"+range[1]+"/"+total;
        // },
        // itemRender:(current,type,originalElement)=>{//用于自定义页码的结构
        //     if(type==='prev'){
        //         return <a>上一页</a>;
        //     }else if(type==='next') {
        //         return <a>下一页</a>;
        //     }
        //     return originalElement;
        // },
    };
    render(){
        console.log("*******render()******");
        this.row_checkbox.selectedRowKeys=this.state.selectedRowKeys;
        return(
            <div>
                <h2>{this.state.name}</h2>
                <Button type="primary" onClick={this.clearTable.bind(this)}>清空表格数据</Button>
                <Table 
                    rowSelection={this.row_checkbox}
                    columns={this.state.columns} 
                    dataSource={this.state.data}
                    bordered={true} 
                    size="middle"
                    pagination={this.pagination}
                />
            </div>
        )
    }
    componentDidMount(){
       this.addTableData();//添加表格数据
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
            data:[],//清空表格数据
            selectedRowKeys:[]//清空选中行key
        });
    }
}
export default ant_table_qt;