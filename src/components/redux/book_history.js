import React ,{ Component }from 'react';

//reducer
function visibilityFilter(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
      return action.filter;
    } else {
      return state;
    }
}

class History extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"history",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default History;