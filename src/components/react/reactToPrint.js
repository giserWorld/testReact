import React ,{ Component }from 'react';
import ReactToPrint from 'react-to-print';
import { Input,Radio,InputNumber,Table } from 'antd';
import './css/testReact.scss';
/**************************react打印组件**********************
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
    let pageStyle=this.props.printDirection==="横向"?{width:"296mm",height:"200mm",pageBreakAfter:"always"}
    :{width:"210mm",height:"296mm",pageBreakAfter:"always"};
    return (
      <div className="printContentDiv">
          {/* 分页 */}
          <div className="onePrintPage" style={pageStyle}>
              <div className="printPage_head">
                松材线虫病发生情况汇总统计表(2019年秋季普查)
              </div>
              <div className="printPage_table">
                <Table 
                  columns={this.table_columns} 
                  dataSource={this.data}
                  bordered={true} 
                  size="middle"
                  pagination={false}
                />
              </div>
          </div>
          <div className="onePrintPage" style={pageStyle}>
              <div className="printPage_head">
                松材线虫病发生情况汇总统计表(2019年秋季普查)
              </div>
              <div className="printPage_table">
                <Table 
                  columns={this.table_columns} 
                  dataSource={this.data}
                  bordered={true} 
                  size="middle"
                  pagination={false}
                />
              </div>
          </div>
      </div>
    );
  }
}//e1

//打印数据
class reactToPrint extends Component{
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
    render(){
        return(
            <div className="printPageDiv" style={{display:"flex",height:"100%"}}>
                <div className="printPage_left" style={{width:"350px"}}>
                  <button onClick={()=>{this.clickFun("纵向")}}>纵向</button><p/>
                  <button onClick={()=>{this.clickFun("横向")}}>横向</button><p/>
                  <ReactToPrint
                      trigger={() => <a onClick={(e)=>{e.preventDefault()}}>打印数据</a>}
                      content={() => this.componentRef}
                  />
                </div>
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
export default reactToPrint;