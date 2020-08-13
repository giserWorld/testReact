import React ,{ Component }from 'react';

import Es6_array from './es6_array';
import Es6_variable_assign from './es6_variable_assign';
import Es6_class from './es6_class';
import Js_logic_operation from './js_logic_operation';
//import Calculate_spread from './calculate_spread';
class es6Viewer extends Component{ 
    constructor(props){
        super(props);
        this.state={
            name:"es6Viewer"
        }
    }
    render(){
        return(
            <div className="wrap">
              {/* <Calculate_spread name={this.state.name}/> */}
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default es6Viewer;