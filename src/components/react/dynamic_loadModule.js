/**************************动态导入模块************************/
import React ,{ Component }from 'react';


class DynmamicImport extends Component{
    state={
        name:"动态导入模块",
    }
    constructor(props){//构造函数props组件传的值
        super(props);
       
    }
    render(){
        return(
            <div>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
    componentDidMount(){
       
    }
}
export default DynmamicImport;//将组件暴露出去