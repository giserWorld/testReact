import React ,{ Component }from 'react';

//test
import Test_render_parent from './test_render_parent';
import Test_urlParamToObject from './test_urlParamToObject';
import Test_router_diff_param from './test_router_diff_param';

//router:"/reactTest"
class reactViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"reactViewer"
        }
    }
    render(){
        return(
            <div className="wrap" name={this.state.name}>
				<Test_router_diff_param name={this.state.name}/>                      
            </div>
        )
    }
}
export default reactViewer;