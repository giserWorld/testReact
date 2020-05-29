import React ,{ Component }from 'react';

/*****************************react组件中定义方法**********************************
 *1.react组件中定义方法的方式
    1)函数声明方式
    2)函数表达式方式
 *2.
 */
class test_Component_Fun extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react组件中定义方法",
        }
    }
    //函数声明方式
    myFun(){
        console.log("函数声明的方式！");
    }
    //函数声明方式
    myTestFun=()=>{
        console.log("函数表达式的方式！");
    }
    render(){
        return(
            <div className="wrap">
                <div>
                    <h1>{this.state.name}</h1>
                </div>
                <div>
                    <button onClick={this.myFun}>声明式函数</button><p/>
                    <button onClick={this.myTestFun}>表达式函数</button><p/>
                </div>
            </div>
        )
    }
    componentDidMount(){
      console.log("************react组件************");  
      console.log(this);  
    }
}
export default test_Component_Fun;
