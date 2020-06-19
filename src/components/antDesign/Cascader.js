/**************************组件************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

import * as antd from 'antd';
const { Cascader } = antd;

const options = [
    {
      value: 'zhejiang',
      label: '浙江',
      children: [
        {
          value: 'hangzhou',
          label: '杭州',
          children: [
            {
              value: 'West Lake',
              label: '西湖',
            },
          ],
        },
      ],
    },
    {
      value: 'Jiangsu',
      label: '江苏',
      children: [
        {
          value: 'nanjing',
          label: '南京',
          children: [
            {
              value: 'zhonghuamen',
              label: '中华门',
            },
          ],
        },
      ],
    },
  ];
  
class cascader extends Component{
    state={
        name:"",
        cascaderDatas:[],
        cascaderValue:""
    }
    constructor(props){//构造函数props组件传的值
        super(props);
    }
    onChange(value) {
        console.log(value);
    }
    render(){
        return(
            <div>
               <Cascader options={this.state.cascaderDatas}  
                         expandTrigger="hover"
                         onChange={this.onChange} 
                         changeOnSelect
                         placeholder="请选择行政区划" />
            </div>
        )
    }
    componentDidMount(){

    }
}
export default cascader;//将组件暴露出去

