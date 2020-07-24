/**************************reducer***********************
 *1.
*/

//初始化state值可以任意类型，例如"object"、"string"
const initialState=0;//state为"int"

//创建reducer函数
function counter(state = initialState, action){
    // 这里暂不处理任何 action
    switch (action.type){
        case "increate":
            return state+1;
        default://默认返回传入的 state。
            return state
    }
}//e

export {counter}