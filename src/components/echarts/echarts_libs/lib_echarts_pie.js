import React ,{ Component }from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';//导入核心库
import echarts from 'echarts/lib/echarts';//导入echarts核心库
import 'echarts/lib/chart/pie';//导入图表类型
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
/**************************饼图**********************
 *更新时间:2020.08.29
 *1.EchartLine_base:基础折线图
 *2.EchartBar_stack:柱状图堆叠
 **/
//*********************2.环状饼图(text)***********************//
export class EchartPie_doughnut_text extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"环状饼图",
            title:props.title||"",//主标题(上)
            subtext:props.subtext||"",//父标题(下)
            data_legend:props.data_legend||[],//图例数据
            data_series:props.data_series||[],//折线数据
            echarts_w:props.echarts_w||"600px",
            echarts_h:props.echarts_h||"600px"
        }
    }
    //图标配置option
    getOption=()=>{
        let _self=this;
        let option={
            title: {
                text:this.state.title,
                subtext:this.state.subtext,
                textAlign:'center',
                itemGap:5, 
                left:'50%',
                top:'47%',
                textStyle: {
                    fontSize:36,
                    color:'#000000',
                  },
                  subtextStyle:{
                    fontSize: 16,
                    color: "#999999"
                  },
            },
            tooltip: {
                show:false,
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                left: 10,
                data: this.state.data_legend,
            },
            series:_self.series_fmt()
        };
        return option;
    }//e
    //格式化series
    series_fmt=(series_list)=>{
        let series=[];
        series_list=series_list||this.props.data_series;
        if(series_list&&series_list.length>0){
            series.push({
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                hoverAnimation:false,
                labelLine: {
                    show: false
                },
                data:series_list
            });
        }
        return series;
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