import React ,{ Component }from 'react';

/*****************************index**********************************
 *1.
 */
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index",
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
