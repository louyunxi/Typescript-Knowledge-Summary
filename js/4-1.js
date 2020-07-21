"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var md5 = function (key, value) {
    return 'md5-' + key + value;
};
console.log(md5('name', 'zhangsan'));
var sha1 = function (key, value) {
    return 'sha1-' + key + value;
};
console.log(sha1('name', 'lisi'));
/* var sha2:encrypt=function(key:string,value:number):string{
    return 'sha2-'+key+value;
}
//如函数 参数没有按照接口约束 会报错
//error TS2322: Type '(key: string, value: number) => string' is not assignable to type 'encrypt'.
//Types of parameters 'value' and 'value' are incompatible. */
console.log("--------------------------------------------------------------------------");
//可索引接口
var arra = [2342, 235325];
var arrb = ['111', '222'];
//约束 某个对象 索引必须为数字 值为字符串
var arrc = ['aaa', 'bbb'];
var obj = { name: '111', age: '111' };
console.log("--------------------------------------------------------------------------");
//定义了约束类的接口 要求实现它的类 要有name属性，和eat方法
//implements不是继承 是实现
var Dogs = /** @class */ (function () {
    function Dogs(name) {
        this.name = name;
    }
    Dogs.prototype.eat = function (how) {
        console.log("\u5403\u72D7\u7CAE " + how);
    };
    return Dogs;
}());
var dogs = new Dogs('小黑');
dogs.eat('躺着吃');
var Cats = /** @class */ (function () {
    function Cats(name) {
        this.name = name;
    }
    Cats.prototype.eat = function () {
        console.log(this.name + '吃');
    };
    return Cats;
}());
var ccc = new Cats('小花');
ccc.eat();
console.log("--------------------------------------------------------------------------");
var Bbbbb = /** @class */ (function () {
    function Bbbbb(name, age) {
        this.name = name;
        this.age = age;
    }
    Bbbbb.prototype.eat = function () {
        console.log(this.name + this.age + '吃东西');
    };
    Bbbbb.prototype.work = function (str) {
        return str;
    };
    return Bbbbb;
}());
var bbbbbb = new Bbbbb('fage', 29);
bbbbbb.eat();
console.log(bbbbbb.work('工作'));
//类可以继承 同时也实现接口
var Ccc = /** @class */ (function (_super) {
    __extends(Ccc, _super);
    function Ccc(name, age) {
        return _super.call(this, name, age) || this;
    }
    Ccc.prototype.coder = function () {
        console.log('敲代码');
    };
    return Ccc;
}(Bbbbb));
var cca = new Ccc('小强', 29);
console.log(cca.work('工作啥'));
cca.coder();
