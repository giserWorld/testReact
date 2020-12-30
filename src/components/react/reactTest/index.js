import React ,{ Component }from 'react';
/**************************test-index**********************
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
            <div name={this.state.name}>
                <h2>{this.state.name}</h2><hr/>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default index;