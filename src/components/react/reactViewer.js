import React ,{ Component }from 'react';

import ReactDOM_render from './reactDOM_render';
import React_createElement from './React_createElement';
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
              <React_createElement/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reactViewer;