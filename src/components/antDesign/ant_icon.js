import React ,{ Component }from 'react';
import { Divider } from 'antd';
import Icon from '@ant-design/icons';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';//图标库
//svg
import { ReactComponent as layer } from '../antDesign/icons/svg/layer.svg';
/*****************************Icon图标**********************************
 *1.图标都会以 <svg> 标签渲染，可以使用 style 和 className 设置图标的大小和单色图标的颜色
 *2.
 */
class ant_icon extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Icon图标",
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
                <Divider>ant icon</Divider>
                <StarOutlined style={{ fontSize: '16px', color: '#08c' }}/>
                <Divider>svg图标</Divider>
                <Icon component={layer} style={{ fontSize: '16px', color: '#08c' }}/>
                <Divider>阿里iconfont</Divider>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_icon;
