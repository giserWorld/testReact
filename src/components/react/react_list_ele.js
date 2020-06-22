import React ,{ Component }from 'react';

/**************************列表元素***********************
 *1.map():map() 方法来遍历数组。将数组中的每个元素变成html标签
 *2.遍历数据生成列表有两种方式:
    1)将遍历数据的代码写在一个方法里面，在render()中引入该方法
    2)直接在render()使用jsx语法遍历数据
*/
class Li_list extends Component{
    state={
        name:"列表元素",
        listData:[
            {id:1,value:"li1"},
            {id:2,value:"li2"},
            {id:3,value:"li3"},
        ]
    }
    constructor(props){
        super(props);
    }
    //格式化数据属性，固定值，清除改变状态属性值，该属性值不会发生变化
    List_li=this.state.listData.map((item,idex)=>{
        return <li key={item.id}>{item.value}</li>
    });
    render(){//渲染函数，当组件实例化后调用
        let {listData}=this.state;//对象的解构赋值
        return(
            <div>
                <h2>{this.state.name}</h2>
                <h3>1.jsx传入一个js变量</h3>
                <ul>{this.List_li}</ul>
                <h3>2.jsx传入一个表达式</h3>
                <ul>
                    {
                       listData.map((item,idex)=>{
                           return <li key={item.id}>{item.value}</li>
                       })
                    }
                </ul>
                <button onClick={this.clearList.bind(this)}>清空列表数据</button><p/>
            </div>
        )
    }
    clearList(){
        this.setState({listData: []});
        console.log("---------------------");
        console.log(this);
    }
    componentDidMount(){
        console.log("---------------------");
        console.log(this);
    }
}
export default Li_list;