import {createStore, applyMiddleware} from 'redux';//redux原生包
import mainReducers from './reducers/index';//主Reducer

//通过原生redux初始化store
const store =createStore(mainReducers);
console.log("初始化的store：",store);
export default store;