import React ,{ Component }from 'react';
import Test_showApiDatas from './test_showApiDatas';
class testPageViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"testPageViewer"
        }
    }
    render(){
        return(
            <div className="wrap">
              <Test_showApiDatas/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default testPageViewer;