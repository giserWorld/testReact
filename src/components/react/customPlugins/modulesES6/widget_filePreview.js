import React,{ Component }from 'react';
import { Resizable } from 'react-resizable';
import FileViewer from 'react-file-viewer';
import '../css/widget_filePreview.css';

/********************文件图书馆*********************
 *1.支持文件预览格式:
   1)png
   2)word
   3)excel
   4)pdf
 */
class fileLibrary extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"fileLibrary",
        }

    }
    render(){
        let { url } = this.props;
        if(!url)return "";
        let index = url.lastIndexOf(".");
        let type = url.substr(index + 1);//文件后缀
        return (
            <div className="fileViewer-div">
                <FileViewer
                    fileType={type}
                    filePath={url}
                    // onError={this.onError}
                    // errorComponent={Error}
                    // unsupportedComponent={Error}
                />
            </div>
        );
    }
}
export default fileLibrary;