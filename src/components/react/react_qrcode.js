import React ,{ Component }from 'react';
import QRCode  from 'qrcode.react';
/**************************生成二维码**********************
 *1.
 **/
class react_qrcode extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index",
            qrUrl:"http://giserworld.gitee.io/mywebsite/index.html"
        }
    }
    //点击下载二维码
    clickFun=()=>{
        var Qr=document.getElementById('qrid');  
        let image = new Image();
        image.src = Qr.toDataURL("image/png");
        var a_link=document.createElement("a");
        a_link.href=image.src;
        a_link.download='二维码'
		a_link.click();
    }//e
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <div>
                    {/* 二维码 */}
                    <QRCode
                        id='qrid'
                        value={this.state.qrUrl}//value参数为生成二维码的链接
                        size={200} //二维码的宽高尺寸
                        fgColor="#000000"  //二维码的颜色
                    />
                </div>
                <button onClick={this.clickFun}>下载二维码</button>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default react_qrcode;