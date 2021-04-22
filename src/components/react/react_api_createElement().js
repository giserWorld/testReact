import React ,{ Component }from 'react';
/**************************React_createElement***********************
 *1.React.createElement(type,[props],[...children])
    创建并返回指定类型的新 React 元素
 *2.document.createElement("div")方法返回dom对象
 *3.React.createElement("div")方法返回react dom对象(虚拟dom)与html dom对象是不同的
 *4.创建react元素的方式
   1)通过React.createElement("div")方式创建
   2)通过jsx方式创建
*/
class React_createElement extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"React_createElement",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
    componentDidMount(){
        var divDom=document.createElement("div");
        var divDom2=React.createElement("div");
        console.dir(divDom);
        console.dir(divDom2);
    }
}
export default React_createElement;