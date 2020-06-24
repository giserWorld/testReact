import React ,{ Component }from 'react';


//reducer
function todos(state = [], action) {
    switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }]);
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        action.index === index ?
          { text: todo.text, completed: !todo.completed } :
          todo
     )
    default:
      return state;
    }
}

class English extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"english",
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
export default English;