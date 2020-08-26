import React ,{ Component }from 'react';
/**************************index**********************
 *
 **/
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
                <h2>{this.state.name}</h2><hr/>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default index;