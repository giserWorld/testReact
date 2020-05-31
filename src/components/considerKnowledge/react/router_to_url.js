import React ,{ Component }from 'react';

/*****************************路由跳转**********************************
 *1.
 */
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"路由跳转url",
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
                <button onClick={this.to_router_url.bind(this)}>路由跳转url(方法1)</button>
            </div>
        )
    }
    //路由跳转url(方法1)
    to_router_url(){
        
    }
    componentDidMount(){
          console.log("Component:",this);
          var router=this.context.router;
          console.log("router:",router);
    }
}
export default index;
