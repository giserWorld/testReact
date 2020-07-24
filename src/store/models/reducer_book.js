/**************************redux***********************
 *1.
*/
//定义组件的 Reducer
const bookData = {
    state:{
        name:"bookData",
        count:0,
        redux_value:"book",
    },
    reducers: {
        //定义action
        changeData(state,payload) {
            return Object.assign({...state,...{
                //redux_value:state.redux_value+(state.count+1),
                redux_value:payload,
                count:state.count+1 
            }});
        },
        //payload为参数
        test_action(state, payload){
            return state + payload
        }
    },
    effects: {
        // handle state changes with impure functions.
        // use async/await for async actions
        async incrementAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            this.increment(payload)
        },
    },
}//e
export {bookData}