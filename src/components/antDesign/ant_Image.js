import React ,{ Component }from 'react';
import { Divider } from 'antd';
/*****************************ant_Image**********************************
 *1.可预览的图片
 *2.需要展示图片时使用
 *3.加载大图时显示 loading 或加载失败时容错处理。
 *4.Image组件antd": "4.3.5"版本使用不了，需要升级到"4.7.2"
 */
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index",
            imgUrl:"",
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><Divider/>
                <div className="imageDiv">
                    {/* <Image
                        width={200}
                        src={this.state.imgUrl}
                    /> */}
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
