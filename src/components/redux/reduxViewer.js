import React ,{ Component }from 'react';

import Redux_book from './redux_book';
class reduxViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"reduxViewer"
        }
    }
    render(){
        return(
            <div className="wrap">
              <Redux_book/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reduxViewer;