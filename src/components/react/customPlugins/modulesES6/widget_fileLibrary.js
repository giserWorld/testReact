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
  *********************成员方法*********************
  *1.recordHistory(datalist):记录当前目录数据
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
    //记录历史记录
    recordHistory(datalist){
        let _self=this;
        _self.historyLog.push({type:"next",data:datalist}); 
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
    //下载文件
    downFile=(item,e)=>{
        let _self=this;
        //(e)=>{e.preventDefault()}
        if(item.type==="png"&&item.url){
            _self.img2base64(item.url,function(base64){
                //图片保存到本地的方法
                var a=document.createElement("a");
                var eventClick=new MouseEvent("click");
                a.download=item.name||"图片";
                a.href=base64;
                a.dispatchEvent(eventClick);//触发a的单击事件
                //console.log("base64：",base64);
            })
        }
        else if(item.url){
            //图片保存到本地的方法
            var a=document.createElement("a");
            var eventClick=new MouseEvent("click");
            a.download="";
            a.href=item.url;
            a.dispatchEvent(eventClick);//触发a的单击事件
        }
    }//e
    img2base64(imgUrl,callback){
        if(imgUrl){
            let img=new Image();  
            img.src=imgUrl;  
            img.setAttribute("crossOrigin","anonymous");
            //img.crossOrigin='*'
            img.onload=function(){  
                let base64=getBase64Image(img);  
                if(callback)callback(base64);
            }
        }
        function getBase64Image(img){  
            let canvas=document.createElement("canvas");  
            canvas.width=img.width;  
            canvas.height=img.height;  
            let ctx=canvas.getContext("2d");  
            ctx.drawImage(img,0,0,img.width,img.height);  
            let ext=img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();  
            let dataURL=canvas.toDataURL("image/"+ext);  
            //let dataURL=canvas.toDataURL("image/png");  
            return dataURL;  
        }//e1
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
                                            <a className="fileName" onClick={()=>{this.downFile(item)}}>{item.name||""}</a>:
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