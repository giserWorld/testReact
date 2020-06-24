import React ,{ Component }from 'react';

import Book from './book';
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
              <Book></Book>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reduxViewer;