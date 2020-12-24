import React ,{ Component }from 'react';

import Scss_import from './scss_order_@import';

//router:"/scss"
class scssViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"scssViewer"
        }
    }
    render(){
        return(
            <div className="wrap">
				<Scss_import name={this.state.name}/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default scssViewer;