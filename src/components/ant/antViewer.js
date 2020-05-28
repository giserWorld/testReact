import React ,{ Component }from 'react';
import MainPage from './main';
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
                <MainPage></MainPage>
            </div>
        )
    }
    componentDidMount(){
        
    }
    
}
export default antViewer;