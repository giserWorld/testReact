import React ,{ Component }from 'react';
import * as api from '../../api/api';
class test_showApiDatas extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"test_showApiDatas",
            listData:[]
        }
    }
    //显示列表数据
    showList=()=>{
        var _self=this;
        var url="/apc/YLZRBHQGISServer/hz/getUserLb.action";//代理接口
        var param={
            rows:15,
            page:0
        };
        api.get(url,param,function(result){
            if(result.status==200){
                var param=result.param||{};
                var returnData=result.data;
                _self.setState({
                    listData:returnData.rows||[] 
                });
            }
        });
    }
    //清空列表数据
    clearList=()=>{
        this.setState({listData:[]});
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
                <button onClick={this.showList}>显示列表</button><p/>
                <button onClick={this.clearList}>清空列表</button><p/>
                <ul>
                {
                    this.state.listData.map((item,idx)=>{
                        return <li key={idx}>{item.user_username}</li>
                    })
                }
                </ul>
               
            </div>
        )
    }
    componentDidMount(){

    }
}
export default test_showApiDatas;