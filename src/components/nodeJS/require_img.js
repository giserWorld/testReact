/*******************导入图片******************
 *1.使用require动态加载本地图片
    1)require("@/assets/imgs/cloud/Directory.svg") // 直接应用不会报错
    2)require(path) // 使用变量报错，路径未找到
 *2.webpack本身是一个预编译的打包工具，无法预测未知变量路径 不能require纯变量路径
 *3.require(path),path 至少要有三部分组成, 目录+文件名+后缀
    1)目录 => webpack 才知道从哪里开始查找
    2)后缀 => 文件后缀，必须要加上，不然会报错
    3)文件名 => 可用变量表示
 *4.require('@/assets/'+item.svg ) //不能完全使用变量，前置地址必须是静态地址，否则会报错
*/