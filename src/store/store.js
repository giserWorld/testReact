import { init } from '@rematch/core'
import * as models2 from './models/test';//全部导出作为一个对象
import models from './models/index';
//console.log(models2);//{count:object}

//console.log("数据models:",models);//{count:object}
//通过"@rematch/core"将数据model初始化为store对象
const store = init({
    models 
});
var storeState=store.getState();//获取所有的存贮容器中的状态
//console.log("初始化的store：",store);
//console.log("storeState：",storeState);
export default store;