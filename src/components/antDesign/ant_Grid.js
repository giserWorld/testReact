import React ,{ Component }from 'react';
import { Row, Col} from 'antd';
import './css/my_ant.scss';
/*****************************24栅格系统**********************************
 *1.栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 
 */
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"栅格系统",
        }
    }
    render(){
        return(
            <div className="wrap">
               {/* 行1 */}
               <Row className="my_row">
                    <Col className="my_col" span={6}>
                        Col-6
                    </Col>
                    <Col className="my_col" span={6}>
                        Col-6  
                    </Col>
                    <Col className="my_col" span={6}>
                        Col-6  
                    </Col>
                    <Col className="my_col" span={6}>
                        Col-6  
                    </Col>
               </Row>
               {/* 行2 */}
               <Row className="my_row" gutter={16+8*2}>
                    <Col className="gutter-row my_col" span={6}>
                        Col-6
                    </Col>
                    <Col className="gutter-row my_col" span={6}>
                        Col-6  
                    </Col>
                    <Col className="gutter-row my_col" span={6}>
                        Col-6  
                    </Col>
                    <Col className="gutter-row my_col" span={6}>
                        Col-6  
                    </Col>
               </Row>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
