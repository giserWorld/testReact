/**************************组件************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类

import * as antd from 'antd';
const { Cascader } = antd;

const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  
class cascader extends Component{
    state={
        name:""
    }
    constructor(props){//构造函数props组件传的值
        super(props);
    }
    onChange(value) {
        console.log(value);
    }
    render(){
        var Select=this.props.children;
        return(
            <div>
               <Cascader options={options}  onChange={this.onChange}placeholder="请选择行政区划" />
            </div>
        )
    }
    componentDidMount(){
       
    }
}
export default cascader;//将组件暴露出去

