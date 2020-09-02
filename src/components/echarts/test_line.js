import React ,{ Component }from 'react';
import { 
    EchartLine_base,
    EchartLine_multi 
} 
from './echarts_libs/lib_echarts_Line';
/**************************index**********************
 *
 **/
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"折线图图表",
            title:"",
            data_legend:[],
            data_x:[],
            data_series:[],
            data_legend2:['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            data_x2:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            data_series2:[
                {
                    name: '邮件营销',
                    type: 'line',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ],
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <div>
                    <button onClick={()=>{this.updateData("btn1")}}>更新数据1</button><p/>
                    <button onClick={()=>{this.updateData("btn2")}}>更新数据2</button><p/>
                </div>
                <div className="echartDiv">
                    <EchartLine_multi
                        title={this.state.title}
                        data_legend={this.state.data_legend}
                        data_x={this.state.data_x}
                        data_series={this.state.data_series}
                    />
                </div>
            </div>
        )
    }
    //更新数据
    updateData=(type)=>{
        if(type=="btn1"){
            this.setState({
                title:type,
                data_legend:[],
                data_x:['地区一', '地区二', '地区三', '地区四', '地区五', '地区六', '地区日'],
                data_series:[
                    {
                        name: '视频广告',
                        type: 'line',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });
        }
        else if(type=="btn2"){
            this.setState({
                title:type,
                data_legend:this.state.data_legend2,
                data_x:this.state.data_x2,
                data_series:this.state.data_series2,
            });
        }
    }
    componentDidMount(){

    }
}
export default index;