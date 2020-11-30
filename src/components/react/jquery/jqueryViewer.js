import React ,{ Component }from 'react';

//jquery
import Jquery_resize from './jquery_resize';
class jqueryViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"jqueryViewer"
        }
    }
    render(){
        return(
            <div className="wrap">
				<Jquery_resize/>                  
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default jqueryViewer;