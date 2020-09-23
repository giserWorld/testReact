import React ,{ Component }from 'react';
import { 
    EchartBar_base,
    EchartPie_doughnut_text,
} 
from './echarts_libs/lib_echarts_pie';

/**************************index**********************
 *
 **/
//测试饼图
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"测试饼图",
            title:"100",
            subtext:"颗",
            pieName:"调查类型",
            data_legend:[],
            data_series:[
                {name:"直接访问",value: 335,emphasis:{label:true}},
                {name:"联盟广告",value: 300},
            ],
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <EchartBar_base
                    title={this.state.title}
                    subtext={this.state.subtext}
                    name={this.state.pieName}
                    data_legend={this.state.data_legend}
                    data_series={this.state.data_series}
                />
            </div>
        )
    }
    componentDidMount(){

    }
}
export default index;