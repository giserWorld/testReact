import React ,{ Component }from 'react';
/**************************react-doc**********************
 *1.react框架采用"声明式"编写 UI
 *2.
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