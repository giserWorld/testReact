import React,{ Component }from 'react';
import { Table,Checkbox,Dropdown,Menu,Button} from 'antd';
import '../react/customPlugins/css/myReact.scss';
/********************ant_table*********************
 *1.配置自定义表头字段过滤
 *2.
 */
class ant_table_config extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_table_data",
            filterOption:[],
            //filterValues:[],//过滤选中项
        }
        //过滤下拉数据
        this.filterDropData=["北京","上海"];
        //过滤数据选中值
        this.filterValues=[];
    }
    //过滤下拉框单个checkbox
    checkboxOneFun=(evt)=>{
        let _self=this;
        let status=evt.target.checked;
        let name=evt.target.name;
        if(status){
            if(_self.filterValues.indexOf(name)===-1)_self.filterValues.push(name);
        }
        else{
            if(_self.filterValues.indexOf(name)>-1)_self.filterValues.splice(this.filterValues.indexOf(name));
        }
        this.setState({});
        //console.log("checkbox:",evt);
    }//e
    //过滤下拉框按钮
    btn_filter=(type,filterDrop)=>{
        if(type==="重置"){
            this.filterValues=[];
            this.setState({});
            filterDrop.clearFilters();
        }
        else if(type==="确定"){
            filterDrop.confirm();
        }
        console.log("table_filter条件:",this.filterValues);
    }//e

    //表格字段配置
    columns=[
        {
            dataIndex:"key",//字段
            title:"序号",//字段标题
            align:"center",//列的对齐方式
        },
        {
            dataIndex: 'name',
            title:'姓名',
            align:"center",//列的对齐方式
            filterDropdown:(FilterDropdownProp)=>{
                let _self=this;
                let dropdownStatus=FilterDropdownProp.visible;
                if(dropdownStatus){//显示过滤下拉框
                    //console.log(FilterDropdownProp);
                    return (
                        <div className="filterDropDiv">
                            <Menu className="filter_menu"> 
                                {
                                    this.filterDropData.map((item,idx)=>{
                                        return (
                                            <Menu.Item key={idx} className="filter_menu_item">
                                                <Checkbox 
                                                    checked={_self.filterValues&&_self.filterValues.indexOf(item)>-1?true:false} 
                                                    onChange={_self.checkboxOneFun} 
                                                    name={item}>{item}</Checkbox>
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </Menu>
                            <div className="ant-table-filter-dropdown-btns">
                                <Button type="link" size="small" onClick={()=>{_self.btn_filter("重置",FilterDropdownProp)}}>重置</Button>
                                <Button type="primary" size="small" onClick={()=>{_self.btn_filter("确定",FilterDropdownProp)}}>确 定</Button>
                            </div>
                        </div>
                    );
                }
                else{

                }
            },
        },
        {
            dataIndex: 'age',
            title: '年龄',
            align:"center",//列的对齐方式
        },
    ];
    rows=[
        {
            key:"1",//数据key,必须有否则报错
            name: '胡彦斌',
            age: 32,
        },
        {
            key:'2',
            name: '胡彦斌',
            age: 42,
        },
    ];
    //点击回调函数
    clickFun=(type)=>{
        if(type==="添加树形数据"){
            
        }
    }
    render(){
        console.log("*******render()******");
        return(
            <div>
                <Table 
                    style={{width:"600px"}}
                    columns={this.columns}//表格列配置
                    dataSource={this.rows}//表格数据
                    bordered={true}//是否显示单元格边框
                />
            </div>
        )
    }
}
export default ant_table_config;