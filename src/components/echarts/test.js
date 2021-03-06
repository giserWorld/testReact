import React ,{ Component }from 'react';
import echarts from 'echarts/lib/echarts';// 引入 ECharts 主模块
import  'echarts/lib/chart/bar';// 引入图标类型,柱状图
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
/**************************index**********************
 *
 **/
class EchartsTest  extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"EchartsTest ",
        }
    }
    render(){
        return(
            <div>
                <div id="main" style={{ width: 400, height: 400 }}></div>
            </div>
        )
    }
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('main'));//基于准备好的dom，初始化echarts实例
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }//e
}
export default EchartsTest ;