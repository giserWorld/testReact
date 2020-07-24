import React ,{ Component }from 'react';
import { connect } from 'react-redux'
//展示组件
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
                <div>
                  {this.props.redux_value}
                </div>
            </div>
        )
    }
    componentDidMount(){

    }
}
//从外部获取数据
function mapStateToProps(state) {
  return {
    redux_value:state.bookData.redux_value
  }
}//e

//向外部传递action
function mapDispatchToProps(dispatch) {
  return {
    
  }
}//e

export default connect(mapStateToProps,mapDispatchToProps)(English);