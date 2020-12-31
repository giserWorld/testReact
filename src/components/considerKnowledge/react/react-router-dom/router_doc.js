import React ,{ Component }from 'react';

/*****************************router_doc**********************************
 *1.location.push(pathname,search):跳转路由url
    
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
