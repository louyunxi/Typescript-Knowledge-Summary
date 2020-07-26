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
//命名空间 namespace
/*
命名空间:
    在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内
    同Java的包、.Net的命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。命名空间内的对象通过export关键字对外暴露。
命名空间和模块的区别：
    命名空间：内部模块，主要用于组织代码，避免命名冲突。
    模    块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。
*/
var Aaa;
(function (Aaa) {
    var Dog = /** @class */ (function () {
        function Dog(theName) {
            this.name = theName;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + " \u5728\u5403\u72D7\u7CAE");
        };
        return Dog;
    }());
    Aaa.Dog = Dog;
    var SinglePersonDog = /** @class */ (function (_super) {
        __extends(SinglePersonDog, _super);
        function SinglePersonDog(name) {
            return _super.call(this, name) || this;
        }
        SinglePersonDog.prototype.eat = function () {
            console.log(this.name + " \u5403\u60C5\u4FA3\u7684\u72D7\u7CAE");
        };
        return SinglePersonDog;
    }(Dog));
    Aaa.SinglePersonDog = SinglePersonDog;
})(Aaa || (Aaa = {}));
var aa1 = new Aaa.SinglePersonDog('单身狗');
aa1.eat();
