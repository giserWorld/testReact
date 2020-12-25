import React ,{ Component }from 'react';

import Scss_mixin from './scss_order_@mixin';

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
				<Scss_mixin name={this.state.name}/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default scssViewer;