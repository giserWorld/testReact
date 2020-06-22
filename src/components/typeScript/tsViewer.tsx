import React ,{ Component }from 'react';

class tsViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"tsViewer"
        }
    }
    render(){
        return(
            <div className="wrap">
              {this.state.name}  
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default tsViewer;