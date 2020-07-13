import React ,{ Component }from 'react';
import { AutoComplete } from 'antd';
/*****************************AutoComplete自动补全**********************************
 *1.
 */
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"AutoComplete自动补全",
            result:['gmail.com', '163.com', 'qq.com'],
            options:[//自动补全列表
                {id:"1",value:"d"},
                {id:"2",value:"111"},
                {id:"3",value:"gggg"},
            ]
        }
    }
    mockVal = (str, repeat = 1) => ({
        value: str.repeat(repeat),
    });
    //
    onSearch = searchText => {
        var dd=!searchText ? [] : [this.mockVal(searchText), this.mockVal(searchText, 2),this.mockVal(searchText, 3)]
        this.setState({options:dd})
    };
    //选中option
    onSelect =(value,option)=>{
        console.log('selectValue',value);
        console.log('option',option);
    };
    //option列表数据过滤
    filterFun(inputValue,option){
        //var dd=21;
        return true;
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2>
                <AutoComplete
                    options={this.state.options}
                    style={{width: 200}}
                    onSelect={this.onSelect}
                    onSearch={this.onSearch}
                    filterOption={this.filterFun}
                    placeholder="输入值"
                    allowClear={true}
                />
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
