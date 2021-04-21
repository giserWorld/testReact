import React ,{ Component }from 'react';
import Widget_ul_scroll from '../customPlugins/modulesES6/widget_ul_scroll';//左右切换数据
import '../css/testReact.scss';
class plugin_left_right_switch extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"plugin_left_right_switch",
            selectKeys:["2"],
            ulData:[
                {key:"1",name:"北京1",value:"1"},
                {key:"2",name:"北京2",value:"2"},
                {key:"3",name:"北京3",value:"3"},
                {key:"4",name:"北京4",value:"4"},
                {key:"5",name:"北京5",value:"5"},
                {key:"6",name:"北京6",value:"6"},
                {key:"7",name:"北京7",value:"7"},
                {key:"8",name:"北京8",value:"8"},
                {key:"9",name:"北京9",value:"9"},
                {key:"10",name:"北京10",value:"10"},
                {key:"11",name:"北京11",value:"11"},
                {key:"12",name:"北京12",value:"12"},
            ],
        }
    }
    //点击列表选项li
    onClickSelect=(item)=>{
        //this.state.selectKeys.push(item.key);
        this.setState({
            selectKeys:[item.key]
        });
        console.log("click选中选项：",item);
    }//e
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
                <span>横向滚动:</span>
                <div className="test_ul_scroll">
                    <Widget_ul_scroll
                        dataList={this.state.ulData}
                        maxNum={5}
                        selectKeys={this.state.selectKeys}//可控选中key
                        onClickSelect={this.onClickSelect}
                    />
                </div>
                <button onClick={()=>{this.clickFun("更新数据")}}>更新数据</button><p/>
                <button onClick={()=>{this.clickFun("选中项")}}>获取选中项</button><p/>
            </div>
        )
    }
    clickFun=(type)=>{
        let state=null;
        if(type==="更新数据"){
            state={
                selectKeys:[], 
                ulData:[
                    {key:"1",name:"2020-08-26",value:"1"},
                    {key:"2",name:"2020-08-27",value:"2"},
                    {key:"3",name:"2020-08-27",value:"3"},
                    {key:"4",name:"2020-08-27",value:"4"},
                    {key:"5",name:"2020-08-27",value:"5"},
                    {key:"6",name:"2020-08-27",value:"6"},
                    {key:"7",name:"2020-08-27",value:"7"},
                ]
            };
        }
        else if(type==="选中项"){
            console.log("selectKeys:",this.state.selectKeys);
        }
        this.setState(state);
    }
    componentDidMount(){

    }
}
export default plugin_left_right_switch;
