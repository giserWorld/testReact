import React ,{ Component }from 'react';
/**************************测试组件属性更新**********************
 *1.当父子组件渲染时,从最外部到内部一次调用rener()函数，即父组件先调用render函数
    然后调用子组件的render函数，子组件先加载完成，最后父组件结束完成渲染。
 *2.当父组件传给子组件的属性值发生变化时,会触发子组件的componentWillReceiveProps()方法，然后子组件调用
    render()函数,重新渲染组件
 *3.只要是父组件的render()发生重新渲染,都会触发子组件componentWillReceiveProps()、render()的触发,不管子组件
    的数据发生变化
 *4.当setState()方法参数为空对象("{}")时,会触发该组件的render()方法及该子组件的render()方法
 **/
class test_props_update extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"test_props_update",
            username:"xiaohong",
            id:"15",
            data:["map1","map2","map3"],
        }
    }
    render(){
        console.log("parent_render");
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <button onClick={()=>{this.update_data("btn1")}}>更新数据</button><p/>
                <button onClick={()=>{this.update_data("btn2")}}>空数据更新</button><p/>
                <Child
                  name={this.state.username}
                  age={this.state.id}
                  list={this.state.data}
                />
            </div>
        )
    }
    update_data=(type)=>{
        if(type==="btn1"){
            this.setState({
                id:"25",
                data:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            });
        }
        else if(type==="btn2"){
            this.setState({});
        }
    }
    componentDidMount(){

    }
}

//子组件
class Child extends Component{
    componentWillReceiveProps(nextProps){
        console.log("child_nextProps:",nextProps);
    }
    render(){
        console.log("Child_render");
        return(
            <div>
                <p>Child</p>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <ul>
                {
                    this.props.list&&this.props.list.map((item,idx)=>{
                        return <li key={idx}>{item}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default test_props_update;