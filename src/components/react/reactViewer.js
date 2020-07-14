import React ,{ Component }from 'react';

import ReactDOM_render from './reactDOM_render';
import React_createElement from './React_createElement';
import React_scss from './react_scss';
import FunctionCom from './function_class';
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
              <FunctionCom name={this.state.name}/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reactViewer;