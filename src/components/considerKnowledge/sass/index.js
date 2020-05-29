import React ,{ Component }from 'react';

class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"index组件",
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
    componentDidMount(){
       
    }
    componentWillUnmount(){

    }
    
}
export default index;