import { init } from '@rematch/core'
//import * as models from './models/test'
import models from './models'
//根据models创建store
const store = init({
    models 
})
export default store;