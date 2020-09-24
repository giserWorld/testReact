import React ,{ Component }from 'react';
/***********************index************************
 *1.
 */
interface Props {
    name?: string;
    enthusiasmLevel?: number;
}
interface State {
    name?: string,
    age?: number,
}
class index extends Component<Props,State>{  
    constructor(props:any){
        super(props);
        this.state={
            name:"index",
        }
    }
    render(){
        return(
            <div className="wrap">
              {this.state.name}  
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default index;