import React ,{ Component }from 'react';
import { Divider } from 'antd';

/*****************************ant_TreeSelect**********************************
 *1.树型选择控件
 *2.类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等
 */
class ant_TreeSelect extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_TreeSelect",
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><Divider/>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_TreeSelect;
