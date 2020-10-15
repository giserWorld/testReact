import React ,{ Component }from 'react';
import ChinaBook_withRouter from './children/chinaBook_withRouter';
import HistoryBook_redux from './children/historyBook_redux';
import EnglishBook from './children/englishBook';
/**************************react_refs**********************
 *1.redux会影响react组件的ref的使用,即通过refs获取不到react dom节点
 *2.withRouter会影响react组件的ref的使用,即通过refs获取不到react dom节点
 *3.通过"wrappedComponentRef"属性给withRouter包裹组件添加回调函数,将Component放到refs中即可
    <ChinaBook wrappedComponentRef={c=>(this.refs.ChinaBook=c)}/>
 *4.ref属性值可以为一个回调函数(官方推荐)
 **/
class react_refs extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"react_refs",
            type:"2"
        }
    }
    clickFun=(type)=>{
        let _self=this;
        let state=null;
        if(type==="切换"){
            this.state.type==="2"?state={type:"1"}:state={type:"2"};
        }
        else if(type==="获取ref"){
            console.log("_self",_self);
        }
        this.setState(state);
    }
    //ref函数值
    refFun=(comInstance)=>{
        this.ref_EnglishBook=comInstance;
    }//e
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                {/* 1.ref值为函数 */}
                <EnglishBook ref={this.refFun}/>
                <div>
                    <button onClick={()=>{this.clickFun("切换")}}>切换组件类型</button><p/>
                    <button onClick={()=>{this.clickFun("获取ref")}}>获取ref</button><p/>
                </div>
                <div ref="div_container">
                    {
                        this.state.type==="1"?
                        <ChinaBook_withRouter wrappedComponentRef={c=>(this.refs.ChinaBook_withRouter=c)}/>:
                        <HistoryBook_redux ref="HistoryBook_redux"/>
                    }
                </div>
                
            </div>
        )
    }
    componentDidMount(){
        console.log("_self:",this);
    }
}

export default react_refs;