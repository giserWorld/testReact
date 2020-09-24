import React ,{ Component }from 'react';
import { Divider,Pagination  } from 'antd';
/*****************************Pagination分页**********************************
 *1.采用分页的形式分隔长列表，每次只加载一个页面
 *2.系统会根据"total"和"pageSize"自动计算分页条数
 */
class ant_Pagination extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_Pagination",
            pageIndex:1
        }
    }
    //分页数改变
    pageChange=(pageIndex)=>{
        this.setState({pageIndex:pageIndex});
        console.log("pageIndex:",pageIndex);
    }//e
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><Divider/>
                <div style={{border:"1px solid red"}}>
                    <Pagination 
                        defaultCurrent={1}//默认的当前页数 
                        current={this.state.pageIndex}//受控当前页数
                        total={23}//数据总数
                        pageSize={10}//每页条数,默认为10
                        onChange={this.pageChange}
                    />
                </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_Pagination;
