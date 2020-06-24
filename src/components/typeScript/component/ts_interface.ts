/***********************interface************************
 *1.使用接口来描述一个包含接口要求的结构的对象,不必明确地使用 implements语句
 *2.一个对象如果想实现一个接口类型，则该对象中必须包含该接口的数据结构
 */
export default function index(){
    //定义接口数据结构
    interface Person {
        firstName: string;
        lastName: string;
    }
    //参数类型为Person类型
    function greeter(person:Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    } 
    var person1={firstName:"xiaoli",lastName:"dd",name:"接口"};
    var result=greeter(person1);//调用函数
    console.log(result);
}//e