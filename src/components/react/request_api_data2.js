/**************************请求api数据************************/
import React ,{ Component }from 'react';


class RequestCom extends Component{
    state={
        name:"请求数据",
    }
    constructor(props){//构造函数props组件传的值
        super(props);
       
    }
    render(){
        return(
            <div>
                <h3>{this.state.name}</h3>
                <button onClick={this.requestApi.bind(this)}>请求api数据</button>
            </div>
        )
    }
    componentDidMount(){
       
    }
    requestApi(){
        //目标接口地址:"http://localhost:8081/datas/53.geojson"
        var url="http://localhost:9000/api/datas/53.geojson";//必须是本地的地址
        var url2="/api/datas/53.geojson";//自动回默认添加前面地址，最后请求地址和url地址一样
        fetch(url).then(function(res){
            console.log(res);
        });
    }
}
export default RequestCom;//将组件暴露出去