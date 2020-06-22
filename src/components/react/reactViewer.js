import React ,{ Component }from 'react';

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
              {this.state.name}  
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default reactViewer;