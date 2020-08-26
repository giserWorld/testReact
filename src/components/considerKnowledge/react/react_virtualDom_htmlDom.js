import React ,{ Component }from 'react';
import ReactDOM from 'react-dom'
/*****************************react虚拟dom和真实html dom**********************************
 *1.在react中一个jsx对象就是一个虚拟dom对象,即"react元素",可通过"React.createElement"创建
    数据结构:virtualDom={
        $$typeof: Symbol(react.element),
        key: null
        props: {children: Array(2)}
        ref: null
        type: "div"
        _owner: null
        _store: {validated: false}
        _self: index {props: {…}, context: {…}, refs: {…}, updater: {…}, jsx: {…}, …}
        _source:{}
    };
  *2.ReactDOM.render()函数就是将虚拟 DOM 转换成真实 DOM 的工具
  *3.React.createElement() 负责根据代码生成虚拟 DOM，ReactDOM.render() 负责将虚拟 DOM 映射到真实 DOM 上。
 */
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"虚拟dom和真实dom",
        }
    }
    
    /***************react虚拟dom转真实的html dom*****************
    *更新时间：2020.08.26 wxt
    *参数:reactDom(reactDom):react虚拟节点,即jsx
    *无返回值
    *注解：
    *1.推荐使用该方式，该方式兼容所有情况
    *2.domUtilityFun.reactDom2HtmlDom()只能渲染jsx中只包含纯html,不能包含react组件,不推荐 
    */
    reactDom2HtmlDom(reactDom){
        if(reactDom){
            let divDom=document.createElement("div");
            var dd=ReactDOM;
            dd.render(reactDom,divDom);//异步
            return divDom.childNodes[0];
        }
    }//e

    //react jsx
    jsx=(
        <div id="react_jsx">
            <span>用户名:</span>
            <span>tian</span>
        </div>
    );

    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
            </div>
        )
    }
    componentDidMount(){
        //创建虚拟dom,等同于jsx "<div id='reactdom'></div>"
        var reactdom=React.createElement("div",{id:"reactdom"});
        console.log("react_jsx:",this.jsx);
        console.log("reactDom:",reactdom);
        //虚拟dom转html dom对象
        var htmldom=this.reactDom2HtmlDom(this.jsx);
    }

}
export default index;
