import React ,{ Component }from 'react';
/**************************index**********************
 *
 **/
class test_home extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"test_home",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <button>home按钮</button>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default test_home;