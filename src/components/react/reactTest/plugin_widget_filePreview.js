import React ,{ Component }from 'react';
import Widget_filePreview from '../customPlugins/modulesES6/widget_filePreview';
import '../css/testReact.scss';
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"测试控件",
            // url:"http://localhost:84/testTxt.docx",
            // url:"http://localhost:84/testPng.docx",
            // url:"http://localhost:84/testPDF.pdf",
            // url:"http://localhost:84/testExcel.xlsx",
            url:props.url||"http://localhost:84/testWord.docx",
        }
        let url=props.location&&props.location.search?props.location.search:{};//获取路由参数
        this.urlParams=this.urlParamToObject(url);
    }
    urlParamToObject(url){
        let paramObject={};
        if(/\?/.test(url)){
        let urlString = url.substring(url.indexOf("?")+1); 
        let urlArray=urlString.split("&"); 
        for (let i=0,len=urlArray.length;i<len;i++) { 
        let urlItem=urlArray[i]; 
        var idx=urlItem.indexOf("=");
        let name=urlItem.substring(0,idx);
        let value=urlItem.substring(idx+1);
        if(name)paramObject[name]=value; 
        } 
        }
        return paramObject;
    }//e
    render(){
        let url=this.urlParams?this.urlParams.url:this.state.url;
        return(
            <div className="wrap">
                <Widget_filePreview 
                    url={url}
                />
            </div>
        )
    }
    componentDidMount(){
        console.log("plugin_widget_filePreview:",this);
    }
}
export default index;
