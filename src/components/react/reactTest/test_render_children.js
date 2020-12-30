import React ,{ Component }from 'react';
/**************************react子组件**********************
 *
 **/
class react_render_children extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_render_children",
        }
    }
    componentWillReceiveProps(){
        console.log("children_componentWillReceiveProps:",this);
    }//e
    render(){
        console.log("---------children_render()----------");
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default react_render_children;