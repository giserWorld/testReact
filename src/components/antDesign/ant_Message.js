import React ,{ Component }from 'react';
import { Divider,message } from 'antd';
/*****************************ant_Message**********************************
 *1.全局展示操作反馈信息
 *2.可提供成功、警告和错误等反馈信息，顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式
 *3.提示类型:
   1)message.info():信息提醒反馈
   2)message.success():成功提示
 */
class ant_Message extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_Message",
        }
    }
    //点击函数
    clickFun=(type)=>{
        if(type==="info"){
            message.info("信息提示！");
        }
        else if(type==="success"){
            message.success("成功提示！");
        }
        else if(type==="error"){
            message.error("错误提示！");
        }
        else if(type==="warning"){
            message.warning("警告提示！");
        }
    }//e

    render(){
        return(
            <div className="wrap" name={this.state.name}>
                <h2>{this.state.name}</h2><Divider/>
                <button onClick={()=>{this.clickFun("info")}}>信息提示</button><p/>
                <button onClick={()=>{this.clickFun("success")}}>成功提示</button><p/>
                <button onClick={()=>{this.clickFun("error")}}>错误提示</button><p/>
                <button onClick={()=>{this.clickFun("warning")}}>警告提示</button><p/>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_Message;
