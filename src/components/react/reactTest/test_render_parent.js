import React ,{ Component }from 'react';
import Test_render_children from './test_render_children';
/**************************react父组件**********************
 *1.父组组件的重新render会导致子组件的componentWillReceiveProps()和render()函数的触发
 **/
class react_render_parent extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_render_parent",
        }
    }
    //点击函数
    clickFun=()=>{
        this.setState({
            name:"react_render_parent修改",  
        });
    }//e
    render(){
        console.log("---------parent_render()----------");
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <button onClick={this.clickFun}>state改变</button>
                <Test_render_children/>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default react_render_parent;