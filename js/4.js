"use strict";
/*
typeScript中的接口
    属性类接口
    函数类型接口
    可索引接口
    类类型接口
    接口扩展
*/
//ts中自定义方法 传入参数,对json进行约束
function printLabel(labelInfo) {
    console.log('printLabel');
}
//printLabel('hahah'); //错误写法
//printLabel({name:'张三'});  //错误的写法
printLabel({ label: '张三' }); //正确的写法
//无法批量化对传入参数进行约束
console.log("--------------------------------------------------------------------------");
function showName(name) {
    console.log(name.firstName + name.secondName);
}
var nameobj = {
    firstName: '楼',
    secondName: '云溪',
    age: 29
}; //顺序可以不一样
showName(nameobj);
showName({
    firstName: '楼',
    secondName: '云溪',
}); //这样写 要求 传参只包含 firstName,secondName  
console.log("--------------------------------------------------------------------------");
//原生js封装的ajax 
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('ajax 请求成功————————————');
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
/* ajax({
    type:'get',
    data:'name=zhangsan',
    url:'http://a.itying.com/api/productlist', //api
    dataType:'json'
}) */ 
