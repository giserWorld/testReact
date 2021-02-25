/*****************************es6-module**********************************
 *1.ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西
 *2.AMD异步模块加载机制;commonJS同步模块加载机制;
 *3.ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
 *4.浏览器脚本默认语言是js脚本，所以type="application/javascript"可以省略
 *5.浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到<script>标签就会停下来，等到执行完脚本，再继续向下渲染。
 *如果是外部脚本，还必须加入脚本下载的时间。如果脚本体积很大，下载和执行的时间就会很长，因此造成浏览器堵塞，用户会感觉到浏览器“卡死”了，没有任何响应
 *6.浏览器支持脚本三种加载方式:
    1)同步加载(默认),"<script src="path/to/myMethod.js"></script>"
    2)defer异步加载,defer是“渲染完再执行”(推荐),"<script src="path/to/myMethod.js" defer></script>"
    3)async异步加载,async是下载完就执行<script src="path/to/myMethod.js" async></script>
 *7.es6-module加载机制等同于"defer异步加载",即等到整个页面渲染完，再执行模块脚本
 *8.ES6 是在编译时就完成模块加载,确定模块的依赖关系,CommonJS是在运行时加载模块
 *9.一个模块(即.js文件)就是一个独立封闭的模块系统
 *9.ES6暴露接口方式：
   1)export let firstName = 'Michael'=> import { firstName } from module
   2)export {firstName} => import { firstName } from module
   2)export default firstName = 'Michael'=> import firstName from module
 ******************************export命令**********************************
 *1.export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能
 *2.一个模块(即.js文件)就是一个独立的文件。该文件内部的所有变量，外部无法获取，可通过export关键字输出该变量
 *3.export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系

 ******************************export default命令**********************************
 *1.export default命令用于指定模块的默认输出
 *2.export default时，对应的import语句不需要使用大括号；使用export时，对应的import语句需要使用大括号。
 *3.一个模块只能有一个默认输出，因此export default命令只能使用一次
 *4.export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字
 *5.export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句
 ******************************样例demo**********************************
 *1.export命令对外输出变量
 *2.export default命令
 */

/***************1.export命令对外输出变量***************/
   //一次暴露一个接口 
   export let firstName = 'Michael';
   //使用大括号指定所要输出的一组变量,等同于上面一种写法,一次暴露多个接口 
   let lastName="xiaohong";
   let age=21;
   export {lastName,age};

    //2.export对外输出函数或类
    export function fun(x,y) {
        return x * y;
    };

/***************2.export default命令对外输出变量***************/
    //2.export default对外输出变量
    let firstName2 = 'Michael';//声明一个变量
    export default firstName2;//将firstName2变量赋值给default变量