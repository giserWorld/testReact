import React ,{ Component }from 'react';

import Book from './book';
import Test_counter from './test_counter';
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
              <Book/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reduxViewer;