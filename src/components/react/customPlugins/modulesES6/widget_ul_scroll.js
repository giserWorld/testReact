import React ,{ Component }from 'react';
import { LeftOutlined,RightOutlined } from '@ant-design/icons';
import '../css/myReact.scss'
/****************************横向滚动Ul列表********************************
 *更新时间:2020.09.19 wxt
 *1.组件可选属性:
    1)dataList(Array):滚动列表数据
    2)maxNum(Number):最大展示数
    3)selectKeys(Array):选中的数据key数组
 *2.组件可选事件:
    1)onClickSelect(function):点击选中回调函数
 */
class widget_ul_scroll extends Component{
    constructor(props){
        super(props);
        this.state={
            dataList:props.dataList||[],//滚动列表数据
            maxNum:props.maxNum||5,//最大展示数
            scrollUl_list:props.dataList?props.dataList.slice(0,eval(props.maxNum||5)):[],//当前显示的数据项
            scrollIdx:0//滚动起始索引
        }
    }
    componentWillReceiveProps(nextProps){
        //判断列表数据是否为新数据
        if(nextProps.dataList.toString()!=this.props.dataList.toString()){
            this.setState({
                scrollIdx:0,//滚动起始索引
                scrollUl_list:nextProps.dataList?nextProps.dataList.slice(0,eval(nextProps.maxNum||5)):[],//当前显示的数据项
            });
        }
        //console.log("nextProps",nextProps);
    }//e

    //滚动切换
    scrollSwitch=(operate)=>{
        let state=undefined;
        let startIdx=0;
        if(operate==="pre"){
            startIdx=this.state.scrollIdx-eval(this.props.maxNum);
            if(startIdx>=0){
                state={
                    scrollIdx:startIdx,
                    scrollUl_list:this.props.dataList.slice(startIdx,this.state.scrollIdx)
                }
            }
        }
        else{
            let len=this.props.dataList.length;
            startIdx=this.state.scrollIdx+eval(this.props.maxNum);
            if(startIdx<len){
                state={
                    scrollIdx:startIdx,
                    scrollUl_list:this.props.dataList.slice(startIdx,startIdx+eval(this.props.maxNum))
                }
            }
        }
        this.setState(state);
    }//e

    //点击选中列表选项li
    clickUl_li=(item)=>{
        if(this.props.onClickSelect)this.props.onClickSelect(item);
    }//e
    render(){
        return(
            <div className="widget_ul_scroll ul_scroll_div" style={this.props.style||null}>
                {
                    this.state.scrollIdx>0?<span className="ul_arrow" onClick={()=>{this.scrollSwitch('pre')}}><LeftOutlined /></span>:null
                }
                <ul className="ul_scroll">
                    {
                        this.state.scrollUl_list.map((item,idx)=>{
                            return <li className={this.props.selectKeys.indexOf(item.key)===-1?"li_scroll":"li_scroll selectli"} key={idx} onClick={()=>{this.clickUl_li(item)}}>{item.name}</li>;
                        })
                    }
                </ul>
                {
                    (this.state.scrollUl_list.length>0&&this.state.scrollIdx+5<this.props.dataList.length)?
                    <span className="ul_arrow" onClick={()=>{this.scrollSwitch('next')}}><RightOutlined /></span>:null
                }
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default widget_ul_scroll;
