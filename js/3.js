"use strict";
/*
typeScript中的类
    类的定义
    继承
   类里面的修饰符
   静态属性 静态方法
   抽象类 多态
*/
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
console.log("--------------------------------------------------------------------------");
//es5的类
/* function Person(name,age){
    this.name=name;
    this.age=age;
    this.run=function(){
        console.log(this.name+'在运动');
    }
}
Person.who=function(){
    console.log('我是静态方法')
}
Person.prototype.work=function(){
    console.log(this.name+'在工作');
}
var p=new Person('xiaoming',34);
p.run();
p.work();
Person.who(); */
console.log("--------------------------------------------------------------------------");
//ts 的类
var Personplus = /** @class */ (function () {
    function Personplus(n) {
        this.name = n;
    }
    Personplus.prototype.run = function () {
        console.log(this.name + "--run\u8D77\u6765");
    };
    Personplus.prototype.getName = function () {
        return this.name;
    };
    Personplus.prototype.setName = function (n) {
        this.name = n;
    };
    return Personplus;
}());
var pp = new Personplus('张三');
console.log(pp.getName()); //张三
pp.setName('李四');
console.log(pp.name); //李四
console.log("--------------------------------------------------------------------------");
//类的继承
var Webcoder = /** @class */ (function (_super) {
    __extends(Webcoder, _super);
    function Webcoder(name) {
        return _super.call(this, name) || this;
    }
    Webcoder.prototype.run = function () {
        return this.name + "---run\u8D77\u6765 \u5B50\u7C7B\u7684";
    };
    Webcoder.prototype.work = function () {
        console.log(this.name + "\u5DE5\u4F5C\u5566");
    };
    return Webcoder;
}(Personplus));
var webcoder = new Webcoder('程序猿');
console.log(webcoder.run()); //程序猿---run起来 子类的
webcoder.work(); //程序猿工作啦
console.log("--------------------------------------------------------------------------");
//类的修饰符
//typescript里面定义属性的时候给我们提供了 三种修饰符
/*  public :公有          在当前类里面、 子类  、类外面都可以访问
    protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
    private ：私有         在当前类里面可以访问，子类、类外部都没法访问

    属性如果不加修饰符 默认就是 公有 （public） */
var A = /** @class */ (function () {
    function A(name, age, like, work) {
        this.name = name;
        this.age = age;
        this.like = like;
        this.work = work;
    }
    A.prototype.sayHello = function () {
        return this.name + "," + this.age + "," + this.like + "," + this.work;
    };
    return A;
}());
var aa = new A('fage', 29, 'play', 'coder');
console.log(aa.name);
console.log(aa.age);
//console.log(aa.like);   //报错 error TS2445: Property 'like' is protected and only accessible within class 'A' and its subclasses.
//console.log(aa.work);   //报错 Property 'work' is private and only accessible within class 'A'.
console.log(aa.sayHello());
var Aa = /** @class */ (function (_super) {
    __extends(Aa, _super);
    function Aa(name, age, like, work) {
        return _super.call(this, name, age, like, work) || this;
    }
    Aa.prototype.sayHello = function () {
        //console.log(this.work); //父类的私有属性 无法无法继承  Property 'work' is private and only accessible within class 'A'.
        return this.name + "," + this.age + "," + this.like;
    };
    return Aa;
}(A));
var aab = new Aa('fage', 29, 'play', 'coder');
//console.log(aab.like);  //like 是protected属性 子类不可访问  error TS2445: Property 'like' is protected and only accessible within class 'A' and its subclasses.
//console.log(aab.work);  //work 是私有属性 子类不可访问 error TS2341: Property 'work' is private and only accessible within class 'A'.
console.log("--------------------------------------------------------------------------");
//静态方法
var Cc = /** @class */ (function () {
    function Cc(name) {
        this.age = 20;
        this.name = name;
    }
    Cc.prototype.run = function () {
        console.log(this.name + " \u5728\u8FD0\u52A8");
    };
    Cc.staticfn = function () {
        console.log('调用了静态方法');
        //console.log(this.age);  //静态方法里 拿不到 类的 公共/保护类型/私有 属性
        return this.like + " \u9759\u6001\u65B9\u6CD5"; //可以拿到static 静态属性
    };
    Cc.like = '喜欢ts';
    return Cc;
}());
var cc = new Cc('我是c');
cc.run(); //我是c 在运动
console.log(Cc.staticfn()); //喜欢ts 静态方法
console.log(Cc.like); //喜欢ts
console.log("--------------------------------------------------------------------------");
//多态: 父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('吃的方法');
        return this.name + '吃啥';
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃狗粮';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '吃猫粮';
    };
    Cat.prototype.say = function () {
        console.log(this.name + " say hello!");
    };
    return Cat;
}(Animal));
var ani = new Animal('动物');
console.log(ani.eat());
var dog = new Dog('小狗');
console.log(dog.eat());
var cat = new Cat('小猫咪');
console.log(cat.eat());
cat.say();
console.log("--------------------------------------------------------------------------");
//抽象类和抽象方法      用来定义标准
//typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
//用abstract定义抽象方法 只能放在抽象类里面
//abstract 翻译 摘要
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    //如果你手贱写了 eat的实现 也会报错 error TS1245: Method 'eat' cannot have an implementation because it is marked abstract.
    People.prototype.run = function () {
        console.log('普通方法 也被继承 但不对子类有约束');
    };
    return People;
}());
//var peo=new People('人名'); //错误 直接用abstract 定义的抽象类 不可以被实例化
var Coder = /** @class */ (function (_super) {
    __extends(Coder, _super);
    function Coder(name) {
        return _super.call(this, name) || this;
    }
    //抽象类的子类必须实现抽象类里面的抽象方法
    //如不包含eat方法Coder类 会报错： Non-abstract class 'Coder' does not implement inherited abstract member 'eat' from class 'People'.
    Coder.prototype.eat = function () {
        console.log(this.name + "--\u5403\u5916\u5356");
    };
    return Coder;
}(People));
var coder = new Coder('程序猿');
coder.eat(); //程序猿--吃外卖
coder.run(); //普通方法 也被继承 但不对子类有约束
