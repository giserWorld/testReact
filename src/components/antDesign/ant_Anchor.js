import React ,{ Component }from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;
/*****************************Anchor锚点**********************************
 *1.antd的Anchor是根据目标元素的id来进行锚点定位的
 */
class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Anchor锚点链接",
        }
    }
    render(){
        return(
            <div className="wrap">
                    <h2>{this.state.name}</h2>
                    <div style={{position:"fixed",right:"100px",top:"100px"}}>
                        <Anchor onClick={e => e.preventDefault()}>
                            <Link href="#div_id_anchor3" title="锚点链接3" /><p/>
                            <Link href="#div_id_anchor5" title="锚点链接5" /><p/>
                            <Link href="" title="锚点链接6" /><p/>
                        </Anchor>
                    </div>
                    <div id="div_id_anchor1" style={{width:"400px",height:"300px",border:"1px solid red"}}>
                        div_id锚点1
                    </div> 
                    <div id="div_id_anchor2" style={{width:"400px",height:"300px",border:"1px solid red"}}>
                        div_id锚点2
                    </div>
                    <div id="div_id_anchor3" style={{width:"400px",height:"300px",border:"1px solid red"}}>
                        div_id锚点3
                    </div>
                    <div id="div_id_anchor4" style={{width:"400px",height:"300px",border:"1px solid red"}}>
                        div_id锚点4
                    </div>
                    <div id="div_id_anchor5" style={{width:"400px",height:"300px",border:"1px solid red"}}>
                        div_id锚点5
                    </div>
                    <div style={{width:"400px",height:"800px"}}>
                        
                    </div>
            </div>
        )
    }
    componentDidMount(){
          
    }
}
export default index;
