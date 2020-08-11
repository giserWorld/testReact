import React ,{ Component }from 'react';
import { Divider } from 'antd';
import Icon from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import { 
    StarOutlined, 
    StarFilled, 
    StarTwoTone, 
    HomeOutlined
} 
from '@ant-design/icons';//图标库

//1.本地svg图标
import { ReactComponent as layer } from '../antDesign/icons/svg/layer.svg';

//2.通过font-class引用离线"fonticon"项目(不推荐,会有报错提示Unexpected token '<')
//import './icons/iconfont/test1/iconfont.css';

//创建在线IconFont字体图标对象
// const MyIcon= createFromIconfontCN({
//     scriptUrl: '//at.alicdn.com/t/font_1997618_40znixucugd.js',//在线生成fonticon.js脚本
// });

//创建离线IconFont字体图标
const MyIcon= createFromIconfontCN({
    //scriptUrl:'./icons/iconfont/script/test2.js',//离线fonticon.js脚本(错误)
    scriptUrl:'./static/iconfont/script/iconfont_tool.js',//通过web服务方式加载离线fonticon.js脚本(正确)
});


/*****************************Icon图标**********************************
 *1.Icon图标组件都会以 <svg> 标签渲染，可以使用 style 和 className 设置图标的大小和单色图标的颜色
 *2.Icon图标最终以矢量图标svg方式进行加载
 *3.ant加载iconfont的方式L
    1)加载在线iconfont
        通过在线生成scriptUrl地址,例如:"//at.alicdn.com/t/font_1997618_40znixucugd.js"
    2)加载离线的iconfont
        将在线生成的scriptUrl地址内容保存下来，然后通过web服务的方式加载离线iconfont.js脚本即可,
    不能通过es6的方式加载脚本
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
                
                {/************1.ant icon图标***********/}
                <Divider orientation="left">1.ant icon</Divider>
                <StarOutlined style={{ fontSize: '16px', color: 'red' }}/><p/>
                <HomeOutlined 
                   spin={false}
                /><p/>
                
                {/************2.svg图标***********/}
                <Divider orientation="left">2.svg图标</Divider>
                <Icon component={layer} style={{ fontSize: '16px', color: '#08c' }}/>
                
                {/************3.阿里字体图标iconfont(Symbol方式,推荐)***********/}
                <Divider orientation="left">3.阿里iconfont</Divider>
                <MyIcon type="iconyuandian1" style={{ fontSize: '20px', color: 'blue' }}/>
                
                {/************4.阿里字体图标iconfont(font-class方式)***********/}
                <Divider orientation="left">4.iconfont(font-class方式)</Divider>
                <i className="iconfont iconzanwu"></i>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_icon;
