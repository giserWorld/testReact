import React ,{ Component }from 'react';

import './css/sass_nested.scss';
class sass_nested extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"sass-嵌套",
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <div className="sass_nested">
                    <span className="span1">6666</span><p/>
                </div>
            </div>
        )
    }
    componentDidMount(){
       
    }
    componentWillUnmount(){

    }
    
}
export default sass_nested;