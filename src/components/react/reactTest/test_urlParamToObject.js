import React ,{ Component }from 'react';
import { withRouter } from "react-router";

/**************************test_urlParamToObject**********************
 *
 **/
class test_urlParamToObject extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"test_urlParamToObject",
        }
    }
    clickFun=()=>{
        let _self=this;
        //获取类似get请求的参数:"?name=ddd&type=21"
        let pathParam=_self.props.location&&_self.props.location.search?_self.props.location.search:"";
        console.log("pathParam:",pathParam);
    }
    render(){
        return(
            <div name={this.state.name}>
                <h2>{this.state.name}</h2><hr/>
                <button onClick={this.clickFun}>获取路由参数</button>
            </div>
        )
    }
    componentDidMount(){
        console.log("_self:",this);
    }
}
export default withRouter(test_urlParamToObject);