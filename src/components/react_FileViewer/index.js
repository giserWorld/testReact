import React ,{ Component }from 'react';
import FileViewer from 'react-file-viewer';
import './fileViewer.css';
/**************************react-file-viewer*********************
 *1.在线预览word,pdf,docx格式的文件
 *2.
 **************************属性**********************
 *1.
 **/

class react_FileViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_FileViewer",
            //http://localhost:84/mapDatas/images/senfang1.jpg
            //http://localhost:84/testWord.docx
            //http://localhost:84/testExcel.xlsx
            //http://localhost:84/testPDF.pdf
            filePath:"http://localhost:84/testPDF.pdf"
        }
    }
    render(){
        let { filePath } = this.state;
        let index = filePath.lastIndexOf(".");
        let type = filePath.substr(index + 1);//文件后缀
        return(
            <div className="wrap">
                <div className="fileViewer-div">
                    <FileViewer
                        fileType={type}
                        filePath={this.state.filePath}
                        // onError={this.onError}
                        // errorComponent={Error}
                        // unsupportedComponent={Error}
                    />
                </div>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default react_FileViewer;