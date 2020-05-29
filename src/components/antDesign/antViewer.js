import React ,{ Component }from 'react';
import Ant_Grid from './ant_Grid';
import Test_Anchor from './ant_Anchor';
//sample
import sample_Anchor from './sample/test_Anchor';
class antViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"antViewer"
        }
    }
    render(){
        return(
            <div className="wrap">
                <Test_Anchor></Test_Anchor>
                {/* <Test_Anchor/> */}
            </div>
        )
    }
    componentDidMount(){
        
    }
    
}
export default antViewer;