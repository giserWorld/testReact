import React ,{ Component }from 'react';
import { 
    EchartPie_doughnut_text 
} 
from './echarts_libs/lib_echarts_pie';
/**************************index**********************
 *
 **/
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"饼图",
            title:"100",
            subtext:"颗",
            data_legend:[],
            data_series:[
                {
                    value: 335,
                },
                {
                    value: 310
                },
            ],
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <EchartPie_doughnut_text
                    title={this.state.title}
                    subtext={this.state.subtext}
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