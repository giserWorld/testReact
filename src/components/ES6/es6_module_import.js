import React ,{ Component }from 'react';
import firstName2 from './es6_module_export';
import {age} from './es6_module_export';
/*****************************es6-module**********************************
 *9.ES6引用接口方式：
   1)export let firstName = 'Michael'=> import { firstName } from module
   2)export {firstName} => import { firstName } from module
   2)export default firstName = 'Michael'=> import firstName from module
 ******************************样例demo**********************************
 *1.export命令对外输出变量
 *2.export default命令
 */

 //引入export default输出变量
console.log("export default变量:",firstName2);
 //引入export输出变量
console.log("export变量:",age);

export default class index extends Component{
  render(){return ""}
};