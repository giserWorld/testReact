/**************************scss_Nested************************/
import React ,{ Component }from 'react';
import './scss/scss_Nested.scss';

class scss_Nested extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"scss_Nested",
        }
    }
    render(){
        return(
            <div className="scss_Nested">
                <h2>{this.state.name}</h2>
                <div>
                    box1
                </div>
                <div className="box_div2">
                    box2
                </div>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default scss_Nested;