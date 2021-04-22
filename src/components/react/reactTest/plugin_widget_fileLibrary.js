import React ,{ Component }from 'react';
import Widget_fileLibrary from '../customPlugins/modulesES6/widget_fileLibrary';
import '../css/testReact.scss';
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"测试控件",
            dataList:[
                {
                    name:"标书",
                    tip:"1",
                    type:"file",
                    children:[
                        {
                            id:1,
                            name:"file1",
                            tip:"",
                            type:"word",
                            url:"http://localhost:84/testWord.docx"
                        }
                    ]
                },
                {
                    id:2,
                    name:"标书",
                    tip:"",
                    type:"word",
                    url:"http://localhost:84/testWord.docx"
                },
                {
                    id:2,
                    name:"人名单",
                    type:"excel",
                    url:"http://localhost:84/testExcel.xlsx"
                },
                {
                    id:2,
                    name:"表格",
                    tip:"",
                    type:"pdf",
                    url:"http://localhost:84/testPDF.pdf"
                },
                {
                    id:2,
                    name:"动物",
                    tip:"",
                    type:"png",
                    url:"http://localhost:84/testPng.png"
                },
                {
                    name:"目录1",
                    tip:"6",
                    type:"file",
                    children:[
                        {
                            id:1,
                            tip:"",
                            type:"png",
                        },
                        {
                            id:1,
                            tip:"8",
                            children:[
                                {
                                    id:1,
                                    name:"file1",
                                    tip:"",
                                    type:"word",
                                },
                            ]
                        }
                    ]
                },
                {
                    name:"文本",
                    tip:"",
                    type:"txt",
                    url:"http://localhost:84/testTxt.txt"
                },
                {
                    id:2,
                    tip:"",
                    type:"txt",
                },
                {
                    name:"人名单",
                    tip:"",
                    type:"excel",
                },
                {
                    id:2,
                    tip:"",
                    type:"excel",
                },
                {
                    id:2,
                    tip:"",
                    type:"excel",
                },
                {
                    id:2,
                    tip:"",
                    type:"excel",
                },
                {
                    id:2,
                    tip:"",
                    type:"word",
                },
                {
                    id:2,
                    tip:"",
                    type:"word",
                },
                {
                    id:2,
                    tip:"",
                    type:"word",
                },
                {
                    id:2,
                    tip:"",
                    type:"word",
                },
                {
                    id:2,
                    tip:"",
                    type:"word",
                },
                {
                    id:2,
                    tip:"",
                    type:"png",
                },
                {
                    id:2,
                    tip:"",
                    type:"txt",
                },
            ]
        }
    }
    //点击选中文件
    onClickSelect=(item)=>{
        if(item.url){
            let url="http://localhost:9000/#/fileViewer?url="+item.url;
            let index=item.url.lastIndexOf(".");
            let type=item.url.substr(index + 1);//文件后缀
            if(type==="txt"){
               window.open(item.url);
            }
            window.open(url);
        }
        console.log("clickItem:",item);
    }//e
    render(){
        return(
            <div className="wrap" style={{width:"500px",height:"300px"}}>
                <Widget_fileLibrary 
                    dataList={this.state.dataList}
                    onClickSelect={this.onClickSelect}
                />
            </div>
        )
    }
}
export default index;
