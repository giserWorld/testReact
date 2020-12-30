import React ,{ Component }from 'react';
import Redux_book from './redux_book';

//router:"/redux"
class reduxViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"reduxViewer"
        }
    }
    render(){
        return(
            <div className="wrap reduxViewer">
              <Redux_book name={this.state.name}/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reduxViewer;