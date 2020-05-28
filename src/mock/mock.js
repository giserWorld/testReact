1 /***************************mock对象构造数据******************************/
var Mock = require('mockjs');//导入mock模块

//暴露一个函数，函数返回一个json数据对象
module.exports=function(){
    //创建Mock实例对象，即创建json格式的对象
    const data = Mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    });
    data.pointData={//点数据
        pt:[100.485466139,26.949986865],
        type:"point",
        attr:{name:"测报灯"}
    }
    return data
};