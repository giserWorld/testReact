/**************************index************************/
import React ,{ Component }from 'react';

class index extends Component{
    state={
        name:"index",
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default index;