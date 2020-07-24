/**************************reducer***********************
 *1.
*/

//初始化state值可以任意类型，例如"object"、"string"
const initialState={//state为"object"
    name:"username",
    type:"state为object"
};

//创建reducer函数(响应action更新state)
function reducer_user(state=initialState,action){
    // 这里暂不处理任何 action，
    var ac=action;
    return state
}//e
export {reducer_user}