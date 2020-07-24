import { combineReducers } from 'redux';//多个reducer 合并成一个reducer
import {counter} from './reducer_count';//子reducer函数
import {reducer_user} from './reducer_user';//子reducer函数

//主reducer,action触发行时按照"mainReducers"顺序一次调用
const mainReducers = combineReducers({
    counter,
    reducer_user,
});
export default mainReducers;
