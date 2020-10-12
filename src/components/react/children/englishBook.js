import React ,{ Component }from 'react';

//react常规组件
class englishBook extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"englishBook(react常规组件)"
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2><hr/>
            </div>
        )
    }
}

export default englishBook;