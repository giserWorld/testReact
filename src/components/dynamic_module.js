/**************************动态导入模块************************/
import React ,{ Component }from 'react';


class DynmamicImport extends Component{
    state={
        name:"动态组件",
    }
    constructor(props){//构造函数props组件传的值
        super(props);
    }
    render(){
        return(
            <div>
               <button onClick={this.clickFun.bind(this)}>动态加载组件</button>
            </div>
        )
    }
    clickFun(){
        //动态加载组件，减少一次性加载全部组件
        import("./dynamic_loadModule").then(function(module){
            var dynamicMk=new module.default();
        });
    }
    componentDidMount(){
       
    }
}
export default DynmamicImport;//将组件暴露出去