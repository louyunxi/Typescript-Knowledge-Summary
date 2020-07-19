"use strict";
//数据类型
// boolean , number , string , array
//元祖类型 tuple
//枚举类型 enum
//never 类型
//任意类型 any
//null , undefined
var a = true;
var b = 2;
//b='23423';
b = 12.5698;
var c = '1331';
//定义数组 可以约束数组项 的类型 有两种方式
//方式一
var arr = [1, 2, 3, 4];
var arr2 = ['123', 'asef'];
//方式二
var arr3 = [22, 33, 44];
var arr4 = ['11', 'aefa', 'aeff'];
//方式三 元祖类型 （tuple） 属于数组类型的一种 定义数组多种的数据类型
var arr5 = ['234', 123, true];
/*
枚举类型（enum）
    随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
    例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。
    在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。
    如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
    也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，
    这种方法称为枚举方法，用这种方法定义的类型称枚举类型。
        
            enum 枚举名{
                标识符[=整型常数],
                标识符[=整型常数],
                ...
                标识符[=整型常数],
            } ;
 */
//pay_status 0 未支付 1支付 2交易成功
//flag 1 true 成功 -1false 失败
var payStatus;
(function (payStatus) {
    payStatus[payStatus["nopay"] = 0] = "nopay";
    payStatus[payStatus["pay"] = 1] = "pay";
    payStatus[payStatus["success"] = 2] = "success";
})(payStatus || (payStatus = {}));
var f = payStatus.pay; //定义一个变量 它的类型是 枚举类型 payStatus
console.log(f); //1
console.log(payStatus.success); //2
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["orange"] = 6] = "orange";
})(Color || (Color = {}));
//如果没有赋值 默认就是为索引值 如上一个有值 则以上一个为基准
//如果当前值未赋值 上一个赋值了 上一个必须为number类型
var d = Color.orange;
console.log(Color.red); //0
console.log(Color.yellow); //1
console.log(d); //6
//任意类型 any  可用于一些dom对象的声明（因为没有object类型，具体类型无法表达清楚）
var e = 123;
e = 'str'; //类型可以修改
console.log(e);
//undefined 其他（never类型）数据类型的子类型
var ff;
//console.log(ff); //定义变量但是 未赋值 会报错
var gg; //输出undefined 正确
var hh;
console.log(hh); //undefined
hh = 123;
console.log(hh); //123
var i;
//num=123; //声明了null 类型 不可以赋值其他值 只能赋值为null
i = null;
var j; //未赋值为 undefined 可赋值为 null 、number
console.log(j); //undefined
j = 123;
console.log(j); //123
j = null;
console.log(j); //null
//void类型  typescript中表示没有任何类型 一般用于定义方法时 方法没有返回值
function fn() {
    console.log('有数字返回的函数');
    return 0;
}
fn();
function run() {
    console.log('没有返回的函数');
}
run();
//never 类型 是其他类型（包含null,undefind）的子类型，代表从不会出现的值 基本用不到
var k;
//k=null; k不可以赋任何值
k = (function () {
    throw new Error('错误'); //抛出异常 还可以用 any string
})();
