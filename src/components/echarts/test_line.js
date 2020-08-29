import React ,{ Component }from 'react';
import { 
    EchartLine_base,
    EchartLine_stack 
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
            data_legend:['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            data_x:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            data_series:[
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ],
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <EchartLine_stack
                    title={this.state.title}
                    data_legend={this.state.data_legend}
                    data_x={this.state.data_x}
                    data_series={this.state.data_series}
                />
            </div>
        )
    }
    componentDidMount(){

    }
}
export default index;