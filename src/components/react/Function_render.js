/**************************字体图标************************/
import React ,{ Component }from 'react';//核心组件类,每一个组件中必须包含该类


class Com extends Component{
    state={
        name:"render()",
        cont:0
    }
    constructor(props){
        super(props);
    }
    render(){
        this.state.cont= this.state.cont+1;
        console.log(this.state.cont);
        return(
            <div>
                <h3>{this.state.name}</h3>
                <button onClick={this.changeFun.bind(this)}>改变</button>
            </div>
        )
    }
    componentDidMount(){

    }
    changeFun(){
        if(this.state.name=="render()"){
            this.setState({
                name:"fork" 
            })
        }
        else{
            this.setState({
                name:"render()" 
            })
        }
       
    }
    
}
export default Com;