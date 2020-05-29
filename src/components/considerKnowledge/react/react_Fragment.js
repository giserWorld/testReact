import React ,{ Component }from 'react';

/*****************************react片段**********************************
 *1.片段(fragments) 可以让你将子元素列表添加到一个分组中，并且不会在DOM中增加额外节点
 *2.通过<React.Fragment>片段包裹react组件
 *3."<>"语法可以用来声明React片段(fragments)
 *4.目前许多工具都不支持这个简写语法 ， 所以你可能需要明确地使用 <React.Fragment> ，直到工具支持这个语法 
 */
class react_Fragment extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_Fragment"
        }
    }
    render(){
        return(
            /*********1.通过<div>包裹react组件********/
            <div className="wrap">
              <h2>{this.state.name}</h2>
              <p>通过"div"包裹react组件</p>
            </div>

            /*********2.通过<React.Fragment>片段包裹react组件********/
            // <React.Fragment>
            //   <h2>{this.state.name}</h2>
            //   <p>通过"React.Fragment"片段包裹react组件</p>
            // </React.Fragment>

            /*********3.通过“<>”react片段简写语法包裹react组件********/
            // <>
            //   <h2>{this.state.name}</h2>
            //   通过“”react片段简写语法包裹react组件
            // </>
        )
    }
    componentDidMount(){
        
    }
    
}
export default react_Fragment;