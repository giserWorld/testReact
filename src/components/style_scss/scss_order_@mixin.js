/**************************scss-index************************/
import React ,{ Component }from 'react';
import './scss/scss_order_@mixin.scss';

class index extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"scss_order_@mixin",
        }
    }
    render(){
        return(
            <div className="scss_mixin">
                <h2>{this.state.name}</h2>
                <div className="box_div1">box_div1</div>
                <div className="box_div2">box_div2</div>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default index;