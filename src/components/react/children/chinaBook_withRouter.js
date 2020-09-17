import React ,{ Component }from 'react';
import { withRouter } from "react-router";//带有路由属性的高阶组件
//withRouter包裹的react组件
class ChinaBook extends Component{
    name="chinaBook_withRouter";
    render(){
        return(
            <div>
                <h2>{this.name}</h2><hr/>
            </div>
        )
    }
    printRes2=()=>{
        
    }
}//e
export default withRouter(ChinaBook);