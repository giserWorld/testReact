import React ,{ Component }from 'react';

import './css/sass_variable.scss';
class sass_variable extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"sass-变量",
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <div className="sass_variable">
                    <span className="span1">6666</span><p/>
                    <span className="span2">5555556</span><p/>
                </div>
            </div>
        )
    }
    componentDidMount(){
       
    }
    componentWillUnmount(){

    }
    
}
export default sass_variable;