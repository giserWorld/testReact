import React ,{ Component }from 'react';

/***************************componentWillReceiveProps(将废弃)*******************************
 *1.当组件初始化(第一次装载)时componentWillReceiveProps()不会被触发
 *2.当父组件重新渲染(render非第一次执行,即state值发生变化)时，子组件会触发componentWillReceiveProps函数(不管子组件的props属性值改变与否或父组件没有给子组件传值)
 *3.子组件的render函数执行前通过componentWillReceiveProps函数获取新的props，从而更新子组件自己的state
 *4.子组件的componentWillReceiveProps()将会在子组件的render()之前触发
 *5.子组件props值发生改变时componentWillReceiveProps()函数会触发,然后会调用render()函数,重新渲染子组件
 *6.优化子组件数据刷新的方法:
    Component{
        componentWillReceiveProps(nextProps){
            if (nextProps.email !== this.props.email) {
                this.setState({ email: nextProps.email });
            }
        }
    }
 *7.子组件的"props"发生变化时不会重新触发"componentDidMount","componentDidMount"只在组件第一次初始化时触发
 *8.componentWillReceiveProps()函数将要废弃,可通过getDerivedStateFromProps用来替换
 *9.props属性对于自身的组件来说是只读的,不能自己修改本身的props属性，只能通过外部修改组件的属性:
    1)通过父组件修改组件props值
    2)通过redux修改组件props值
 *10.父组组件的重新render会导致子组件componentWillReceiveProps()和render()函数的触发
 */
class componentWillReceiveProps extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"componentWillReceiveProps",
            inputValue:"input值",
        }
    }

    //组件将要接受Props函数
    componentWillReceiveProps(nextProps){ 
        let _self=this;
        _self.nextProps=nextProps;//新属性
        if(nextProps.redux_value){//redux属性更新
           
        }
        else{//父组件属性更新
    
        }
        console.log("***********currentProps**********");
        console.log(_self.props);//当前props
        console.log("***********nextProps**********");
        console.log(nextProps);//将要接受的新props
    }//e
    //
    handelChange(name,evt){
        let key=name || "";
        let value=evt.target.value || "";//表单值
        let state={};
        if(key)state[key]=value;
        if(key)this.setState(state);
        //console.log(state);
    }

    render(){
        return(
            <div className="wrap">
               <h2>{this.state.name}</h2>
               <input value={this.state.inputValue} onChange={this.handelChange.bind(this,"inputValue")}/><p/>
               {/* 子组件 */}
               <Child_Book/>
               <button onClick={this.clickFun}>改变父组件state</button>
            </div>
        )
    }
    clickFun=()=>{
        this.setState({});
    }
    componentDidMount(){
        let _self=this;
       
    }
}//e

//子组件
class Child_Book extends Component{
    static staticAttr="静态属性";
    constructor(props){
        super(props);
        this.state={
            name:"Child_Book",
            attr:"state属性",
        }
        console.log("1.child_constructor()");
    }
    
    //props值发生改变时触发(render函数之前),nextProps为将要接受的新props,这个方法已经不建议使用
    componentWillReceiveProps(nextProps){
        let _self=this;
        _self.nextProps=nextProps;//新属性
        if(nextProps.redux_value){//redux属性更新
           
        }
        else{//父组件属性更新
    
        }
        console.log("***********currentProps**********");
        console.log(_self.props);//当前props
        console.log("***********nextProps**********");
        console.log(nextProps);//将要接受的新props
    }//e


    render(){
        console.log("3.child_render()");
        let props=this.nextProps||this.props;//最新props
        return(
            <div>
               {this.state.name}
               属性值prop_value:{this.props.prop_value}
            </div>
        )
    }
    componentDidMount(){
        let _self=this;
        console.log("4.组件渲染完成:componentDidMount()");  
    }
}//e
export default componentWillReceiveProps;
