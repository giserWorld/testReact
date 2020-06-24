/***********************基础类型定义************************
 *1.typeScript基础数据类型：
    1)"number":数值(数字)类型,包含整数和小数（比如1和3.14）
    2)"string":字符串类型
    3)"boolean":布尔类型
    4)"undefined":表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
    5)"null":表示空值，即此处的值为空
 *2.typeScript引用数据类型:
    1)"Object":对象类型,基类
    2)"Array":数组类型
    3)"Function":函数类型
 *3.typeScript特有类型
    1)"Tuple":元组,一个已知元素数量和类型的数组,[string,number,...]
    2)"enum":枚举,一个已知元素数量和类型的数组,[string,number,...]
 *4.TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式
 */
export default function baseDefinition(){
    
/********************6.定义enum枚举类型****************/
       enum m1{name="12",age=20};
       var result1=m1.name;
       console.log("enum:",result1);

/********************5.定义Tuple元组类型****************/
        var q1:[string,number] = ["tuple",100];//Tuple
        var q2:[number,string,boolean] = [111,"100",false];//Tuple

/********************4.定义void类型****************/
        function run():void{//void类型,函数没有返回值
            console.log('run')
        }
        function run2():number{//函数返回值为number类型
            return 123
        }
        function run3(type:string){//参数类型为string类型
            return 123
        }
/********************3.定义基础数据类型****************/
    var b1:boolean = false;//boolean
    var b2:number = 21;//number
    var b3:string = "bob";//string
    var b100:number | undefined;//变量为undefined

/********************2.定义any任意类型****************/
    var num1:any = 123;//变量可以为任一值

/********************1.数组类型****************/
    var array_num:number[]=[1,2,3];//定义数值类型数组
    var array_num2:Array<number>=[11,22,33];//定义数值类型数组(数组泛型)
    console.log("array:",array_num2);  


}//e