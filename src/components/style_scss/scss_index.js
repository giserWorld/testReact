/**************************scss-index************************/
import React ,{ Component }from 'react';
import './scss/scss_index.scss';

class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index",
        }
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