import React ,{ Component }from 'react';
import { Divider } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
/*****************************ant_Tabs**********************************
 *1.
 */
class ant_Tabs extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"ant_Tabs",
        }
    }
    //tab卡切换函数
    /*****************
     *参数:tabKey(String):切换的tab面板key
     *无返回值
    */
    tabSwitchFun=(tabKey)=>{
        console.log("tabKey",tabKey);
    }//e
    render(){
        return(
            <div className="wrap">
                <h2>{this.state.name}</h2><Divider/>
                <Tabs defaultActiveKey="1" onChange={this.tabSwitchFun}>
                    <TabPane tab="面板1" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="面板2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="面板3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default ant_Tabs;
