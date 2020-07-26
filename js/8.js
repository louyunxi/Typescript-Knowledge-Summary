"use strict";
/*
    装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
    通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
    
    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）

    装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一
*/
//修改ts中对装饰器的报错 https://www.jianshu.com/p/4c2bc81b75f0  
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//类装饰器：普通装饰器 （无法传参)
function logClass(params) {
    console.log(params); //Function: Person7]
    params.prototype.apiUrl = '动态扩展的属性';
    params.prototype.run = function () {
        console.log('我是一个run方法');
    };
}
var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.getData = function () {
    };
    Persona = __decorate([
        logClass
    ], Persona);
    return Persona;
}());
var eafa = new Persona();
console.log(eafa.apiUrl);
eafa.run();
//类装饰器：装饰器工厂 （可传参)
function logaClass(params) {
    return function (target) {
        console.log(target); //[Function: Person6]
        target.prototype.apiurl = params;
        target.prototype.show = function () {
        };
    };
}
var Person6 = /** @class */ (function () {
    function Person6(name) {
        this.person6 = name;
    }
    Person6.prototype.show = function () {
    };
    Person6 = __decorate([
        logaClass('http://www.baidu.com') //结尾不要写 ;
    ], Person6);
    return Person6;
}());
var sa = new Person6('11');
console.log(sa.apiurl); //http://www.baidu.com
//重载类的属性和方法
/*
类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。 */
function logvClass(target) {
    console.log(target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = '我是修改后的数据';
            return _this;
            /* 作为表达式调用时，无法解析类修饰器的签名。
            不能将类型“typeof (Anonymous class)”分配给类型“typeof HttpClient2”。
            类型 "(Anonymous class)" 中缺少属性 "getData"，但类型 "HttpClient2" 中需要该属性。 */
        }
        class_1.prototype.getData = function () {
            this.apiUrl = this.apiUrl + '----';
            console.log(this.apiUrl);
        };
        return class_1;
    }(target));
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
        this.apiUrl = '我是构造函数里面的apiUrl';
    }
    HttpClient2.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    HttpClient2 = __decorate([
        logvClass
    ], HttpClient2);
    return HttpClient2;
}());
var http = new HttpClient2();
console.log(http.apiUrl); //我是修改后的数据
http.getData(); //我是修改后的数据----
//属性装饰器
/*
属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
    第一个参数：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    第二个参数：成员的名字,装饰的属性/方法
*/
function logClassa(can) {
    return function (params) {
        params.prototype.api = can;
    };
}
//作用于实例成员 
function shiliProperty(params) {
    return function (target, attr) {
        console.log(target); //HttpClient { getData: [Function] }  类的原型对象
        console.log(attr); //url
        target[attr] = params;
    };
}
//作用于静态成员
function staticProperty(params) {
    return function (target, attr) {
        console.log(target); //[Function: HttpClient]  类的构造函数
        console.log(attr); //staticattr
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        shiliProperty('作用于实例成员的属性装饰器')
    ], HttpClient.prototype, "url", void 0);
    __decorate([
        staticProperty('作用于静态成员的属性装饰器')
    ], HttpClient, "staticattr", void 0);
    HttpClient = __decorate([
        logClassa('类装饰器的入参')
    ], HttpClient);
    return HttpClient;
}());
var httpaa = new HttpClient();
httpaa.getData(); //作用于实例成员的属性装饰器
console.log(httpaa.api); //类装饰器的入参
//方法装饰器
/* 它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。

方法装饰会在运行时传入下列3个参数：
    1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2、成员的名字。
    3、成员的属性描述符。 */
//方法装饰器一
function get(params) {
    return function (target, methodName, desc) {
        console.log('______________________');
        console.log(target); //HttpClient4 { getData: [Function] } 类的原型对象
        console.log(methodName); //getData 需要装饰的方法名
        console.log(desc); //{ value: [Function], writable: true, enumerable: true, configurable: true }
        target.apiUrl = 'xxxx'; //扩展实例属性
        target.run = function () {
            console.log('run');
        };
    };
}
var HttpClient4 = /** @class */ (function () {
    function HttpClient4() {
    }
    HttpClient4.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        get('http://www.itying,com')
    ], HttpClient4.prototype, "getData", null);
    return HttpClient4;
}());
var http4 = new HttpClient4();
console.log(http4.apiUrl);
http4.run();
//方法装饰器二
//修改装饰器的方法  把装饰器方法里面传入的所有参数改为string类型
function descriptionAllMethods(params) {
    return function (target, methodName, desc) {
        console.log(target); //类的原型对象
        console.log(methodName); //getData 需要装饰的方法名
        console.log(desc.value); //[Function]
        var oMethod = desc.value; //1、保存当前的方法
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            oMethod.apply(this, args);
        };
    };
}
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
    }
    HttpClient3.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log('我是getData里面的方法');
    };
    HttpClient3.prototype.getInfo = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log('我是getInfo里面的方法');
    };
    __decorate([
        descriptionAllMethods('http://www.itying,com')
    ], HttpClient3.prototype, "getData", null);
    return HttpClient3;
}());
var http3 = new HttpClient3();
http3.getData(123, true, 'asefa'); //[ '123', 'true', 'asefa' ]
http3.getInfo(123, true); //[ 123, true ]
//方法参数装饰器 
/*
参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据 ，传入下列3个参数：
    1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2、方法的名字。
    3、参数在函数参数列表中的索引。
*/
function logParams(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params); //传入参数
        console.log(target); //类的原型对象
        console.log(methodName); //方法名称
        console.log(paramsIndex); //参数在函数参数列表中的索引 函数的第几个参数
        target.apiUrl = params;
    };
}
var HttpClient6 = /** @class */ (function () {
    function HttpClient6() {
    }
    HttpClient6.prototype.getData = function (uuid) {
        console.log(uuid);
    };
    __decorate([
        __param(0, logParams('xxxxx'))
    ], HttpClient6.prototype, "getData", null);
    return HttpClient6;
}());
var http6 = new HttpClient6(); //0
http6.getData(123456); //123456
console.log(http6.apiUrl); //xxxxx
//装饰器执行顺序
//属性》方法》方法参数》类
// 如果有多个同样的装饰器，它会先执行后面的
function logClass1(params) {
    return function (target) {
        console.log('类装饰器1');
    };
}
function logClass2(params) {
    return function (target) {
        console.log('类装饰器2');
    };
}
function logAttribute1(params) {
    return function (target, attrName) {
        console.log('属性装饰器1');
    };
}
function logAttribute2(params) {
    return function (target, attrName) {
        console.log('属性装饰器2');
    };
}
function logMethod1(params) {
    return function (target, attrName, desc) {
        console.log('方法装饰器1');
    };
}
function logMethod2(params) {
    return function (target, attrName, desc) {
        console.log('方法装饰器2');
    };
}
function logParams1(params) {
    return function (target, attrName, desc) {
        console.log('方法参数装饰器1');
    };
}
function logParams2(params) {
    return function (target, attrName, desc) {
        console.log('方法参数装饰器2');
    };
}
var HttpClient7 = /** @class */ (function () {
    function HttpClient7() {
    }
    HttpClient7.prototype.getData = function () {
        return true;
    };
    HttpClient7.prototype.setData = function (attr1, attr2) {
    };
    __decorate([
        logAttribute1(),
        logAttribute2()
    ], HttpClient7.prototype, "apiUrl", void 0);
    __decorate([
        logMethod1(),
        logMethod2()
    ], HttpClient7.prototype, "getData", null);
    __decorate([
        __param(0, logParams1()), __param(1, logParams2())
    ], HttpClient7.prototype, "setData", null);
    HttpClient7 = __decorate([
        logClass1('http://www.itying.com/api'),
        logClass2('xxxx')
    ], HttpClient7);
    return HttpClient7;
}());
var http7 = new HttpClient7();
/* 属性装饰器2
属性装饰器1
方法装饰器2
方法装饰器1
方法参数装饰器2
方法参数装饰器1
类装饰器2
类装饰器1 */ 
