import React ,{ Component }from 'react';
import { LeftOutlined,RightOutlined } from '@ant-design/icons';
import './css/myReact.scss'
/****************************横向滚动Ul列表********************************
 *更新时间:2020.08.29 wxt
 *1.组件可选属性:
    1)data
    2)maxNum
 *2.组件可选事件:
    1)onSelect
 */
class Widget_scroll_ul_leftRight extends Component{
    constructor(props){
        super(props);
        this.state={
            data:props.data||[],//滚动列表数据
            maxNum:props.maxNum||5,//最大展示数
            scrollIdx:0,//滚动索引
            scrollUl_list:props.data?props.data.slice(0,eval(props.maxNum||5)):[],
            select_li:"",//选中选项
        }
    }
    //滚动切换
    scrollSwitch=(operate)=>{
        let state=undefined;
        let startIdx=0;
        if(operate==="pre"){
            startIdx=this.state.scrollIdx-eval(this.state.maxNum);
            if(startIdx>=0){
                state={
                    scrollIdx:startIdx,
                    scrollUl_list:this.state.data.slice(startIdx,this.state.scrollIdx)
                }
            }
        }
        else{
            let len=this.state.data.length;
            startIdx=this.state.scrollIdx+eval(this.state.maxNum);
            if(startIdx<len){
                state={
                    scrollIdx:startIdx,
                    scrollUl_list:this.state.data.slice(startIdx,startIdx+eval(this.state.maxNum))
                }
            }
        }
        this.setState(state);
    }//e

    //点击列表选项li
    clickUl_li=(item_li)=>{
        this.setState({select_li:item_li});
        if(this.props.onSelect)this.props.onSelect(item_li);
        //console.log("click选中选项：",item_li);
    }//e
    render(){
        return(
            <div className="Widget_scroll_ul_leftRight">
                <div className="ul_scroll_div">
                    {this.state.scrollUl_list.length>0?<span className="ul_arrow" onClick={()=>{this.scrollSwitch('pre')}}><LeftOutlined /></span>:null}
                    <ul className="ul_scroll">
                        {
                            this.state.scrollUl_list.map((item,idx)=>{
                                return <li className={item===this.state.select_li?"li_scroll selectli":"li_scroll"} key={idx} onClick={()=>{this.clickUl_li(item)}}>{item}</li>;
                            })
                        }
                    </ul>
                    {
                        (this.state.scrollUl_list.length>0&&this.state.scrollIdx+5<this.state.data.length)?
                        <span className="ul_arrow" onClick={()=>{this.scrollSwitch('next')}}><RightOutlined /></span>:null}
                </div>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default Widget_scroll_ul_leftRight;
