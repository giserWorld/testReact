/*************************react条件渲染************************/
import React ,{ Component }from 'react';

/*****************************if条件渲染**********************************
 *1.在react中用jsx渲染dom的时候经常会遇到if条件判断，然而在jsx中竟是不允许if条件判断的
 *2.if渲染可通过以下的两种方式进行渲染：
    1)通过三元运算符进行渲染：
        {
            this.state.showStatus?JSX1:JSX2
        }
    2)通过在render()函数中写if else判断设置需要显示的jsx组件
        render(){
            var res="";
            if(this.state.showStatus){
                res=jsx1;
            }
            else{
                res=jsx2;
            }
        }
 */
class index extends Component{
    state={
        name:"if条件渲染",
        showStatus:true,
    }
    constructor(props){
        super(props);
    }
    render(){
         {/* 2.render_if */}
        var jsx="";
        if(this.state.showStatus){
            jsx=(
                <div>
                    <span>2.if else判断：showStatus为true</span>
                </div>
            );
        }
        else{
            jsx=(
                <div>
                    <span>2.if else判断：showStatus为false</span>
                </div>
            );
        }
        return(
            <div className="wrap">
                <div>
                    <h1>{this.state.name}</h1>
                </div>
                <div>
                    {/* 1.三元运算符 */}
                    {
                        this.state.showStatus?
                        <div>1.showStatus为true</div>:
                        <div>1.showStatus为false</div>
                    }
                </div>
                <div>
                    {/* 2.三元运算符 */}
                    {jsx}
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
