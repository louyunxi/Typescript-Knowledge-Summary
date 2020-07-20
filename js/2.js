"use strict";
//ts中 约束 方法 的形参 和 输入
//es5定义函数两种方式
function fna() {
    return 23;
}
var fnb = function () {
    console.log('匿名函数');
};
//ts 定义函数 也是这两种
function fnc(a, b) {
    return "" + a + b;
}
console.log(fnc('fage', 29));
var fnd = function (a, b) {
    return "" + a + b;
};
console.log(fnd('fage', false));
console.log("--------------------------------------------------------------------------");
//可选参数 (默认指定了参数类型 参数都是必传的)
function fne(name, age) {
    if (age) {
        return name + "--" + age;
    }
    else {
        return name + "--\u5E74\u9F84\u4FDD\u5BC6";
    }
}
console.log(fne('fage'));
//注意可选参数 必须配置到参数的最后面
//function getinfo(name?:string,like:string):string(){ ... }
//getinfo('abc')
function fnf(name, like, think) {
    return name + "," + like + "," + think;
}
console.log(fnf('fage', 'aa'));
//可选参数 后面不可再有必填参数 可多个连续可选参数
console.log("--------------------------------------------------------------------------");
//剩余参数 约束类型
//es6 function fn(a,...d){}
function sum(n) {
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    var num = n;
    for (var i = 0, len = other.length; i < len; i++) {
        num += other[i];
    }
    return num;
}
console.log(sum(1, 2, 3, 4, 5, 6)); //21
console.log("--------------------------------------------------------------------------");
function getInfo(name, age) {
    if (age) {
        return '我叫：' + name + '我的年龄是' + age;
    }
    else {
        return '我叫：' + name;
    }
}
console.log(getInfo('张三', 29)); //正确
console.log(getInfo(20)); //正确
//console.log(getInfo(true,29));   //错误
//实际效果 也就只是扩展了同一个方法的 参数类型和返回类型 最终调用当前函数 都是执行最后一个覆盖的同名方法
