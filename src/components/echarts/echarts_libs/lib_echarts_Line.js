import React ,{ Component }from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';//导入核心库
import echarts from 'echarts/lib/echarts';//导入echarts核心库
import 'echarts/lib/chart/line';//导入图表类型
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
/**************************折线图**********************
 *更新时间:2020.09.02 wxt
 *1.EchartLine_base:基础折线图
 *2.EchartLine_multi:折线图多条折线

 
/*********************2.折线图多条折线**********************
 *更新时间:2020.09.03 
 *属性:title(String):图表标题
 ******data_legend(Array):图例数据
 ******data_x(Array):x轴数据
 ******data_series(Array):折线数据
 ******echarts_w(String):宽度
 ******echarts_h(String):高度
 ******param(Object):[opt] 其他参数
*注解:
 *1.param可选属性：
 var param={
    rotate:0,//刻度标签旋转的角度
    y_type:y轴类型
 };
*/
export class EchartLine_multi extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"折线图多条折线",
        }
    }
    //图标配置option
    getOption=()=>{
        let param=this.props.param||{};
        let option={
            title: {
                text:this.props.title||""
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: this.props.data_legend||[]
            },
            grid: {
                top: '5%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data:this.props.data_x||[],
                axisLabel:{
                    rotate:param.rotate?param.rotate:0
                }
            },
            yAxis: {
                type: param.y_type?param.y_type:'value',
                min:1
            },
            series:this.props.data_series||[]
        };
        return option;
    }//e
    render(){
        let echartsStyle={width:this.props.echarts_w||"500px",height:this.props.echarts_h||"500px"};
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
            name:"基础折线图",
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
                data: this.state.data_legend
            },
            grid: {
                left:"5%",
                right:"5%",
                bottom: '8%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data:this.state.data_x
            },
            yAxis: {
                type: 'value'
            },
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