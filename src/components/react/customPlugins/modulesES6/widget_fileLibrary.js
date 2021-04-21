import React,{ Component }from 'react';
import { Resizable } from 'react-resizable';
import FileViewer from 'react-file-viewer';
import '../css/widget_fileLibrary.scss';
import preDir from '../utilityIcons/officeIcon/preDir.png';
/********************文件图书馆*********************
 *更新时间:2021.04.21 wxt
 *1.组件可选属性:
    1)dataList(Array):列表数据
 *2.组件可选事件:
    1)onClickSelect(function):点击选中回调函数
 *3.数据结构属性
  var onedata={
    name?:"文件标题",
    type:"file",//文件类型,可选值:"file"、"word"、"excel"、"pdf"、"png"、"txt"
    tip?:"1",//右上角提示信息
    children:[],//嵌套的子节点
  }
 */
class widget_fileList extends Component{
    historyLog=[];//历史记录
    constructor(props){
        super(props);
        this.state={
            name:"widget_fileList",
            dataList:props.dataList||[],//滚动列表数据
            preDirStatus:false,
        }
        this.historyLog.push({type:"origin",data:props.dataList});
    }
    //点击文件夹
    clickFileIcon=(item)=>{
        let _self=this;
        let children=item.children||"";
        if(children){
            _self.setState({
                dataList:children,
                preDirStatus:true,
            });
            _self.historyLog.push({type:"next",data:children});
        }
        else{
            if(_self.props.onClickSelect)_self.props.onClickSelect(item);
        }
        //console.log("clickItem:",item);
    }//e
    //点击返回上级目录
    clickPreDirectory=()=>{
        let _self=this;
        let preDir=_self.historyLog[_self.historyLog.length-2];
        if(!preDir||preDir.type==="origin"){
            _self.historyLog=[_self.historyLog[0]];
            _self.setState({
                dataList:preDir.data,
                preDirStatus:false,
            });
        }
        else{
            _self.setState({
                dataList:preDir.data,
                preDirStatus:true,
            });
            _self.historyLog=_self.historyLog.slice(0,_self.historyLog.length-1);
        }
    }//e
    componentWillReceiveProps(nextProps){
        if(nextProps.dataList.toString()!=this.props.dataList.toString()){//判断列表数据是否为新数据
            this.setState({
                dataList:nextProps.dataList||[],//更新数据列表
            });
        }
        console.log("nextProps",nextProps);
    }//e
    render(){
        return (
            <div className="widget_fileLibrary">
                {
                    this.state.preDirStatus?(
                        <div className="preDirectory" onClick={this.clickPreDirectory}>
                            <img src={preDir}/>返回一上级
                        </div>
                    ):""
                }
                <div className="fileContent">
                    {
                        this.state.dataList.map((item,idx)=>{
                            let fileName=item.type||"file";
                            let iconurl="/officeIcon/{name}.png".replace("{name}",fileName);
                            let fileicon=require("../utilityIcons"+iconurl);
                            //let dd=require("../utilityIcons/officeIcon/testPng.png")
                            return (
                                <div className="fileBox" key={idx}>
                                    {
                                    item.tip?(
                                        <div className="fileBox-tip">
                                            <span className="spanInfo">{item.tip}</span>
                                        </div>
                                    ):""
                                    }
                                    <div className="fileBox-img">
                                        <img src={fileicon} onClick={()=>{this.clickFileIcon(item)}}/>
                                    </div>
                                    <div className="fileBox-name">
                                        {
                                            fileName!="file"&&item.url?
                                            <a className="fileName" href={fileicon} download>{item.name||""}</a>:
                                            <span className="fileName">{item.name||""}</span>
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default widget_fileList;