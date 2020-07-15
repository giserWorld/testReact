import React ,{ Component }from 'react';

import EchartsTest from './test';
import Rreact_line from './react_line';
class echartsViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"echartsViewer"
        }
    }
    render(){
        return(
            <div className="wrap">
                <Rreact_line/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default echartsViewer;