import React ,{ Component }from 'react';
import { Divider } from 'antd';
import { Card } from 'antd';
/*****************************ant_Card**********************************
 *1.卡片容器可承载文字、列表、图片、段落，常用于后台概览页面
 *2.
 */
class ant_Card extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_Card",
        }
    }
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><Divider/>
                <Card style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_Card;
