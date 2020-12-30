import React ,{ Component }from 'react';

//rnd拖动组件
import Test_render_parent from './test_render_parent';

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
            <div className="wrap">
				<Test_render_parent name={this.state.name}/>                      
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reactViewer;