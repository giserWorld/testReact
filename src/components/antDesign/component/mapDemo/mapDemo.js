import React ,{ Component }from 'react';
import { FileTextOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import { Anchor } from 'antd';
import './mapDemo.scss';
import rowDatas from './rowDatas.json';
//地图demo
class mapDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"antViewer",
            rowDatas:rowDatas.rowDatas
        }
    }
    render(){
        let col_num=this.state.rowDatas[0].children.length;//列数
        col_num=parseInt(24/col_num);
        return(
            <div className="wrap mapdemo">
                <div style={{fontSize: "18px",padding: "5px 2px 2px 5px"}}>
                    <FileTextOutlined />说明
                </div>
                <div className="divBox">
                    1. 标识有 [ 项目widget ] 的属于项目内功能，此处仅做演示，具体交付依赖是否选择对应项目。
                    2. 标识有 [ **插件 ] 的属于独立插件功能，功能代码不含在SDK类库中，具体交付依赖是否选择对应插件。
                    3. 名称内有 Demo 的属于待完善的功能，此处仅做演示，Demo功能存在已知问题，不提供售后维护。
                    4. 如果缺少您想要的示例或有好的建议，可以整理需求发送邮件至xxx
                </div>
                <div className="divBox" id="divBox">
                    {
                        this.state.rowDatas.map((item,idx)=>{
                            return (
                                <Row className="divBox_row" id={item.anchor_id} gutter={[16, 24]} key={item.row_id}>
                                    {
                                        item.children.map((item2,idx2)=>{
                                            return (
                                                <Col className="divBox_col" span={col_num} key={"col"+idx2}>
                                                    <Card className="divBox_Card" title={item2.title} >
                                                        <a>
                                                            <img src={item2.imgUrl} style={{height:"180px"}}></img>
                                                        </a>
                                                    </Card>
                                                </Col>
                                            );   
                                        })
                                    }
                                </Row>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log(rowDatas);
    }
    
}
export default mapDemo;