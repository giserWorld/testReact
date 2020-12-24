/**************************scss-index************************/
import React ,{ Component }from 'react';
import './scss/scss_order_@import.scss';

class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"scss_order_@import",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <div className="my_font">box_div1</div>
                <div className="box_div2">box_div2</div>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default index;