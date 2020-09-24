import React ,{ Component }from 'react';

//常规react组件
class child_eventBook extends Component{
    name="child_eventBook";
    render(){
        return(
            <div>
                <h2>{this.name}</h2><hr/>
            </div>
        )
    }
}
export default child_eventBook;