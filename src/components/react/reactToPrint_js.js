import React ,{ Component }from 'react';
import ReactToPrint from 'react-to-print';
import { Input,Radio,InputNumber,Table } from 'antd';
import './css/testReact.scss';

/**************************js打印(原生方法)**********************
 *1.通过使用style={{pageBreakAfter:‘always’}} 实现样式分页打印
 **/

//打印内容组件
class ComponentToPrint extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"内容组件",
        }
    }
    table_columns=[
      {
          dataIndex:"key",//字段
          title:"序号",//字段标题
          align:"center",//列的对齐方式
      },
      {
          dataIndex:'tbr',
          title:'填报人',
          align:"center",//列的对齐方式
      },
      {
          dataIndex: 'jlsj',
          title: '时间',
          align:"center",//列的对齐方式
      },
      {
          dataIndex: 'szdq',
          title: '地址',
          align:"center",//列的对齐方式
      },
      {
          dataIndex: 'zl',//自定义下拉字段过滤菜单
          title: '种类',
          align:"center",//列的对齐方式
      },
  ]
  data=[
      {"key":1,"jcjlzs":15,"jd":102.21,"jlsj":"2017/12/14","sj":"针叶林","szdq":"金辰","tbr":"admin1","uuid":20135,"wd":24.23,"zl":"猴子"},
      {"key":2,"jcjlzs":15,"jd":102.21,"jlsj":"2017/12/14","sj":"针叶林","szdq":"金辰街道办事处","tbr":"admin2","uuid":20135,"wd":24.23,"zl":"猴子"},
  ]
  render() {
    let pageStyle=this.props.printDirection==="横向"?
    {width:"296mm",height:"200mm",pageBreakAfter:"always",textAlign:"center"}
    :{width:"210mm",height:"296mm",pageBreakAfter:"always",textAlign:"center"};
    return (
      <div className="printContentDiv" id="printContentDiv">
          {/* 分页 */}
          <div className="onePrintPage" style={pageStyle}>
              <div className="printPage_head">
                松材线虫病发生情况汇总统计表(2019年秋季普查1)
              </div>
              <div className="printPage_table">
                    <Table 
                        columns={this.table_columns}//表格列配置
                        dataSource={this.data}//表格数据
                        bordered={true}//是否显示单元格边框
                        pagination={false}//分页插件
                    />
              </div>
          </div>
          <div className="onePrintPage" style={pageStyle}>
              <div className="printPage_head">
                松材线虫病发生情况汇总统计表(2019年秋季普查2)
              </div>
              <div className="printPage_table">
                    <Table 
                        columns={this.table_columns}//表格列配置
                        dataSource={this.data}//表格数据
                        bordered={true}//是否显示单元格边框
                        pagination={false}//分页插件
                    />
              </div>
          </div>
      </div>
    );
  }
}//e1

//打印数据
class reactToPrint_js extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"reactToPrint",
            printDirection:"纵向"
        }
    }

    //点击函数
    clickFun=(type)=>{
      this.setState({
        printDirection:type
      });
    }//e

    //js打印页面
    printPage_js=()=>{
        let uid=new Date().getTime();
        let newWindow = window.open('','printwindow'+uid);//打开新窗口
        if(newWindow){
            newWindow.document.write(window.document.getElementById('printContentDiv').innerHTML);//新页面写入数据
            var head = newWindow.document.getElementsByTagName('head')[0];
            var link = newWindow.document.createElement('link');
            link.href = "./static/lib/css/antd_g.css";
            link.rel = 'stylesheet';
            link.type = 'text/css';
            head.appendChild(link);
            link.onload=function(evt){
                newWindow.print();
                newWindow.close();
            }
        }
    }
    render(){
        return(
            <div className="printPageSeting" style={{display:"flex",height:"100%"}}>
                {/* 左侧调整区域 */}
                <div className="printPage_left">
                  <button onClick={()=>{this.clickFun("纵向")}}>纵向</button><p/>
                  <button onClick={()=>{this.clickFun("横向")}}>横向</button><p/>
                  <a onClick={this.printPage_js}>打印</a>
                </div>
                {/* 右侧预览区域 */}
                <div className="printPage_right">
                  <ComponentToPrint 
                    ref={el => (this.componentRef = el)} 
                    printDirection={this.state.printDirection}
                  />
                </div>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default reactToPrint_js;