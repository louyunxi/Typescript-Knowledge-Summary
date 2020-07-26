"use strict";
//泛型的定义  类型的变量
/*

泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)
*/
//泛型函数
//传入的参数和返回的参数一致 
function getData(value) {
    return value;
}
//并不是强制要求 参数和返回都是T类型
//函数返回类型 可以是any或者其他 只是这样没有意义了  没有任何约束  function getData<T>(value:T):number{} 此处参数T跟any也没啥区别 毫无意义
//如果返回类型为T function getData<T>(value:T):T{return value;}  参数类型就必须为T 否则就不能满足 返回类型为T
//any 性能没有泛类高
console.log(getData('sin'));
console.log(getData(234));
//泛型类
var MinClas = /** @class */ (function () {
    function MinClas() {
        this.list = [];
    }
    MinClas.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClas.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClas;
}());
var m1 = new MinClas(); /*实例化类 并且制定了类的T代表的类型是number*/
m1.add(11);
m1.add(3);
m1.add(2);
console.log(m1.min());
var m2 = new MinClas(); /*实例化类 并且制定了类的T代表的类型是string*/
m2.add('c');
m2.add('a');
m2.add('v');
console.log(m2.min());
var fnaa = function (value, name) {
    return value;
};
console.log(fnaa('324', '345'));
console.log(fnaa(true, '345'));
function fnafe(value, like) {
    return value;
}
var fnbb = fnafe;
console.log(fnbb('第二种方式 赋值给新的变量', 323432)); //ste
