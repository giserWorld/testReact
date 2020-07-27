/***********************interface************************
 *1.使用接口来描述一个包含接口要求的结构的对象,不必明确地使用 implements语句
 *2.一个对象如果想实现一个接口类型，则该对象中必须包含该接口的数据结构
 *3.TypeScript的核心原则之一是对值所具有的结构进行类型检查
 *4.接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 *5.interface数据结构包含两种属性类型:
    1)"必须属性",{firstName: string}
    2)"可选属性",{firstName?: string}
    3)"只读属性",{readonly firstName: string}
 *6.带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号
 *7.属性名前用 readonly来指定只读属性
 */
export default function index(){
    //定义接口数据结构
    interface Person {
        firstName: string,//必须属性
        lastName?: string,//可选属性
    }
    //参数类型为Person类型
    function greeter(person:Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    } 
    var person1={firstName:"xiaoli",lastName:"dd",name:"接口"};
    var result=greeter(person1);//调用函数
    console.log(result);
}//e