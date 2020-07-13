import React ,{ Component }from 'react';

import ReactDOM_render from './reactDOM_render';
import React_createElement from './React_createElement';
import React_scss from './react_scss';
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
              <React_scss/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reactViewer;