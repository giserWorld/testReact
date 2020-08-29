import React ,{ Component }from 'react';
import Widget_scroll_ul_leftRight from './customPlugins/Widget_scroll_ul_leftRight';
class plugin_left_right_switch extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"plugin_left_right_switch",
            data:[
                "北京1","北京2","北京3","北京4","北京5",
                "北京6","北京7","北京8","北京9","北京10",
                "北京11","北京12","北京13","北京14","北京15",
                "北京16","北京17",
            ],
        }
    }
    //点击列表选项li
    clickUl_li=(item_li)=>{
        console.log("click选中选项：",item_li);
    }//e
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
                <span>横向滚动:</span>
                <Widget_scroll_ul_leftRight
                    data={this.state.data}
                    maxNum={6}
                    onSelect={this.clickUl_li}
                />
            </div>
        )
    }
    componentDidMount(){

    }
}
export default plugin_left_right_switch;
