import React ,{ Component }from 'react';
import baseDefinition from './component/baseDefinition';
import ts_interface from './component/ts_interface';
class tsViewer extends Component{
    baseDefinition=baseDefinition();//基础类型定义
    ts_interface=ts_interface();//基础类型定义
    constructor(props:any){
        super(props);
        this.state={
            name:"tsViewer"
        }
    }
    render(){
        return(
            <div className="wrap">
              {/* {this.state.name}   */}
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default tsViewer;