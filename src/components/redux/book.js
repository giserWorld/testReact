import React ,{ Component }from 'react';
import History from './book_history';
import English from './book_english';


class Book extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"book",
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <hr/><History></History>
                <hr/><English></English>
            </div>
        )
    }
    componentDidMount(){

    }
}
export default Book;