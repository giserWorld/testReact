import React ,{ Component }from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';//导入核心库
import echarts from 'echarts/lib/echarts';//导入echarts核心库
import 'echarts/lib/chart/bar';//导入图表类型
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
/**************************柱状图**********************
 *更新时间:2020.08.29
 *1.EchartLine_base:基础折线图
 *2.EchartBar_stack:柱状图堆叠
 **/
//*********************2.柱状图堆叠***********************//
export class EchartBar_stack extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"柱状图堆叠",
            title:props.title||"",//图标标题
            data_legend:props.data_legend||[],//图例数据
            data_x:props.data_x||[],//x轴数据
            data_series:props.data_series||[],//折线数据
            echarts_w:props.echarts_w||"600px",
            echarts_h:props.echarts_h||"600px"
        }
    }
    //图标配置option
    getOption=()=>{
        let option={
            title: {
                text:this.state.title
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {// 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'// 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: this.state.data_legend
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data:this.state.data_x
                }
            ],
            yAxis:[
                {
                    type: 'value'
                }
            ],
            series:this.state.data_series
        };
        return option;
    }//e
    render(){
        let echartsStyle={width:this.state.echarts_w,height:this.state.echarts_h};
        return(
            <ReactEchartsCore
                echarts={echarts}
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true}
                style={echartsStyle}
                onEvents={{
                    // click: this.onChartClick
                }}
            />
        )
    }
    componentDidMount(){

    }
}//e


//*********************1.基础折线图***********************//
export class EchartLine_base extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index",
            
        }
    }
    //图标配置option
    getOption=()=>{
        let option={
            //标题组件
            title: {
                text: '堆叠区域图'
            },
            //提示框组件
            tooltip: {
                trigger: 'axis',//提示触发类型
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                }
            },
            //图例组件
            legend: {
                itemWidth: 16,
                right: '10%',
                top: '0%',
                textStyle: {
                  color: '#000'
                },
                // data: ['邮件营销', '联盟广告', '视频广告']
            },
            //工具栏，默认内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
            toolbox: {
                feature: {
                  saveAsImage: {}
                }
            },
            //直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。
            grid: {
                left:"5%",
                right:"5%",
                bottom: '8%',
                containLabel: true
            },
            //直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠。
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            //直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠
            yAxis: {
                type: 'value'
            },
            //系列列表。每个系列通过 type 决定自己的图表类型
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
        return option;
    }//e
    render(){
        return(
            <ReactEchartsCore
                echarts={echarts}
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true}
                style={{ width: '400px', height: '400px',border:"1px solid black"}}
                onEvents={{
                    // click: this.onChartClick
                }}
            />
        )
    }
    componentDidMount(){

    }
}//e