import React ,{ Component }from 'react';

/*****************************router_doc**********************************
 *1.location.push(pathname,search):跳转路由url(url中不能带参数),如果需要进行带参数url
   进行跳转,则需要使用"window.location.hash"方式跳转，否则会出现空白页面
 *2.  
 */
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"router_doc",
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
