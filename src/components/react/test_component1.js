/*************************index************************/
import React ,{ Component }from 'react';


class index extends Component{
    state={
        name:"测试组件",
    }
    constructor(props){
        super(props);
        console.log("测试子组件-constructor()");
    }
    render(){
        console.log("测试子组件-render()");
        return(
            <div className="wrap">
                {this.state.name}
            </div>
        )
    }
    componentDidMount(){
        console.log("测试子组件-componentDidMount()");
    }
}
export default index;
