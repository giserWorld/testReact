import React ,{ Component }from 'react';
import { withRouter } from "react-router";//带有路由属性的高阶组件
/**************************react跳转新窗口**********************
 *1.打开新窗口
 *2.
 **/
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index",
        }
    }
    clickFun=()=>{
        //打开新窗口"http://localhost:9000/#/ant"
        let paramStr="?type=1&name=小红"
        let newWin=window.open("#/react"+paramStr,"_blank");
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <div>
                    <button onClick={this.clickFun}>打开新窗口</button><p/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let _self=this;
        let url=_self.props.location?_self.props.location.search:"";
        let path=window.encodeURIComponent(url);//解码2
        let path2=window.decodeURI(url);//解码1
        console.log("_self:",this);
    }
}
export default withRouter(index);