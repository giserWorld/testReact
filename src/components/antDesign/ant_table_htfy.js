import React,{ Component }from 'react';
import * as api from '../../api/api';
import { Table, Divider, Tag} from 'antd';
import { Button } from 'antd';


/********************table后台分页*********************
 *1.
 *2. 
 */
class ant_table_ht extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_table(后台分页)",
            data:[],//表格数据
            columns:[],//表格列数据
            pagination:this.pagination,//分页组件
            selectedRowKeys:[],//控制表格选中的行key
            filterDropdownVisible:false,//自定义下拉框
        }
    }
    //表格列配置对象
    table_columns=[
        {
            dataIndex:"key",//字段
            title:"序号",//字段标题
            align:"center",//列的对齐方式
            //defaultSortOrder:'ascend',//默认排序,可选值:"descend"(降序)、"ascend"(升序)
            sorter:(data2,data1,fieldOrder)=>{//本地排序规则函数,设置该属性后字段列默认开启"升序"、"降序"切换
                return data2.key-data1.key;
            }
        },
        {
            dataIndex:'tbr',
            title:'填报人',
            align:"center",//列的对齐方式
            sortDirections:["descend"],//支持的排序方式,默认为[''ascend','descend']
            sorter:(data2,data1)=>{
                return data2.tbr.length - data1.tbr.length;//根据字符串长度进行排序
            }
        },
        {
            dataIndex: 'jlsj',
            title: '时间',
            align:"center",//列的对齐方式
            sorter:(data2,data1)=>{
                return data2.tbr.length - data1.tbr.length;//根据字符串长度进行排序
            }
        },
        {
            dataIndex: 'szdq',
            title: '地址',
            align:"center",//列的对齐方式
            filters:[//表头的筛选菜单项	
                {text:"北京",value:"北京"},
                {text:"上海",value:"上海"},
            ],
            onFilter:(value,data)=>{//本地模式下(对当前页面数据进行过滤)，点击确定筛选的运行函数
                return data.szdq.indexOf(value)=== 0;
            } 
        },
        {
            dataIndex: 'zl',//自定义下拉字段过滤菜单
            title: '种类',
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
        simple:true,//显示为简单分页,分页只显示当前页面数和总页数,如:"1/10"，默认false
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
                <input ref="input_val"></input>
                <Button type="primary" onClick={this.setCurrentPage.bind(this)}>设置当前页面</Button>
                <Button type="primary" onClick={this.clearTable.bind(this)}>清空表格数据</Button>
                <Table 
                    rowSelection={this.row_checkbox}
                    columns={this.state.columns} 
                    dataSource={this.state.data}
                    bordered={true} 
                    size="middle"
                    //pagination={this.state.pagination}
                    onChange={this.handleTableChange}
                />
            </div>
        )
    }
    //处理后台分页
    handleTableChange=(pagination,filters,sorter) => {
        let pageSize=pagination.pageSize;//页面条数
        let currentPage=pagination.current;//当前页面
        this.setState({pagination},()=>{this.addTableData();});
    };
    //跳转到指定页面
    setCurrentPage(){
        var currentPage=this.refs.input_val.value||"";
        if(!currentPage)return false;
        this.state.pagination.current=eval(currentPage);
        this.setState({pagination:this.state.pagination},()=>{this.addTableData();});
    }
    componentDidMount(){
        this.addTableData();//添加表格数据
     }
    //ajax请求数据
    addTableData(){
        let _self=this;
        //this.setState({ loading: true });//数据刷新
        //ajax请求远程数据
        var url="http://localhost:9000/static/datas/table_data.json";
        var param={
            pageSize:this.state.pagination.pageSize||this.state.pagination.defaultPageSize,
            currentPage:this.state.pagination.current||this.state.pagination.defaultCurrent,
        };
        api.get(url,param,(result) =>{
            //console.log(result);
            _self.setState({
              //loading:false,//停止数据刷新
              columns:_self.table_columns,//设置表格列
              data:result.returnData.rows||[],//设置表格数据
              selectedRowKeys:[]//清空选中行key
            });
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
export default ant_table_ht;