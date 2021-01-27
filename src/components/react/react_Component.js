import React ,{ Component }from 'react';
/**************************React.Component**********************
 *1.Component为react核心组件,react组件都需要继承Component
 *2.Component实现类型:
    1)常规组件
      class index extends Component{}
    2)泛型组件(ts)
      class index extends Component<IProps,IState>{}
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