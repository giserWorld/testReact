import React ,{ Component }from 'react';

import React_FileViewer from './react_FileViewer/index';

class pluginViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"pluginViewer",
        }
    }
    render(){
        return(
            <div className="wrap pluginViewer">
                <React_FileViewer name={this.state.name}/>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default pluginViewer;