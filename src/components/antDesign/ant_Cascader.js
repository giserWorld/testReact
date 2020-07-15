
import React ,{ Component }from 'react';
import { Cascader } from 'antd';
/**************************级联选择***********************
 *1.
*/

//选项数据
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
          children: [],
        },
      ],
    },
  ];
  
class ant_Cascader extends Component{
    constructor(props){//构造函数props组件传的值
        super(props);
        this.state={
          name:"ant_Cascader",
          data:options
        }
    }
    /*****************仅显示最新的选项********************
     *参数:label(Array):需要显示标注的数组,例如:["Zhejiang", "Hangzhou"] 
     ******selectedOptions(Array):选中的dataObj
     * */
    displayRender=(label,selectedOptions)=>{
      console.log(label,selectedOptions);
      return label[label.length-1];
    }//e
    //搜索过滤
    filter=(inputValue, path)=>{
      return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    onChange=(value)=>{
      console.log(value);
  }
    render(){
        var Select=this.props.children;
        return(
            <div>
              <h2>{this.state.name}</h2>
               <Cascader 
                  changeOnSelect
                  placeholder="请选择行政区划" 
                  options={this.state.data}  
                  expandTrigger="hover"
                  displayRender={this.displayRender}
                  showSearch={this.filter}
                  onChange={this.onChange} 
                />
            </div>
        )
    }
    componentDidMount(){
       
    }
}
export default ant_Cascader;

