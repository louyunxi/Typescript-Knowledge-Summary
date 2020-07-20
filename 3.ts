/* 
typeScript中的类
    类的定义
    继承
   类里面的修饰符
   静态属性 静态方法
   抽象类 多态 
*/

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
class Personplus{
    name:string;
    constructor(n:string){
        this.name=n;
    }
    run():void{
        console.log(`${this.name}--run起来`)
    }
    getName():string{
        return this.name;
    }
    setName(n:string):void{
        this.name=n;
    }
}
var pp=new Personplus('张三');
console.log(pp.getName());  //张三
pp.setName('李四')
console.log(pp.name);  //李四
 
console.log("--------------------------------------------------------------------------");

//类的继承
class Webcoder extends Personplus{
    constructor(name:string){
        super(name);
    }
    run():string{
        return `${this.name}---run起来 子类的`;
    }
    work():void{
        console.log(`${this.name}工作啦`);
    }
}
let webcoder=new Webcoder('程序猿');
console.log(webcoder.run());    //程序猿---run起来 子类的
webcoder.work();    //程序猿工作啦

console.log("--------------------------------------------------------------------------");

//类的修饰符
//typescript里面定义属性的时候给我们提供了 三种修饰符
/*  public :公有          在当前类里面、 子类  、类外面都可以访问
    protected：保护类型    在当前类里面、子类里面可以访问 ，在类外部没法访问
    private ：私有         在当前类里面可以访问，子类、类外部都没法访问

    属性如果不加修饰符 默认就是 公有 （public） */
class A{
    name:string;
    public age:number;
    protected like:string;
    private work:string;
    constructor(name:string,age:number,like:string,work:string){
        this.name=name;
        this.age=age;
        this.like=like;
        this.work=work;
    }
    sayHello():string{
        return `${this.name},${this.age},${this.like},${this.work}`;
    }
}

let aa=new A('fage',29,'play','coder');
console.log(aa.name);
console.log(aa.age);
//console.log(aa.like);   //报错 error TS2445: Property 'like' is protected and only accessible within class 'A' and its subclasses.
//console.log(aa.work);   //报错 Property 'work' is private and only accessible within class 'A'.
console.log(aa.sayHello());

class Aa extends A{
    constructor(name:string,age:number,like:string,work:string){
        super(name,age,like,work);
    }
    sayHello():string{
        //console.log(this.work); //父类的私有属性 无法无法继承  Property 'work' is private and only accessible within class 'A'.
        return `${this.name},${this.age},${this.like}`;
    }
}
let aab=new Aa('fage',29,'play','coder');
//console.log(aab.like);  //like 是protected属性 子类不可访问  error TS2445: Property 'like' is protected and only accessible within class 'A' and its subclasses.
//console.log(aab.work);  //work 是私有属性 子类不可访问 error TS2341: Property 'work' is private and only accessible within class 'A'.

console.log("--------------------------------------------------------------------------");

//静态方法
class Cc{
    public name:string;
    public age:number =20;
    static like:string='喜欢ts';
    constructor(name:string){
        this.name=name;
    }
     
    run():void{ //实例方法 挂在Person类的原型上方法
        console.log(`${this.name} 在运动`)
    }
    static staticfn():string{
        console.log('调用了静态方法');
        //console.log(this.age);  //静态方法里 拿不到 类的 公共/保护类型/私有 属性
        return `${this.like} 静态方法`; //可以拿到static 静态属性
    }
}
var cc=new Cc('我是c');
cc.run();   //我是c 在运动
console.log(Cc.staticfn()); //喜欢ts 静态方法
console.log(Cc.like);   //喜欢ts

console.log("--------------------------------------------------------------------------");

//多态: 父类定义一个方法不去实现，让继承它的子类去实现  每一个子类有不同的表现
class Animal {
    name:string;
    constructor(name:string) {
        this.name=name;
    }
    eat(){   //具体吃什么  不知道，具体吃什么?继承它的子类去实现 ，每一个子类的表现不一样
        console.log('吃的方法');
        return this.name+'吃啥';
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name+'吃狗粮';
    }
}
class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name+'吃猫粮'
    }
    say():void{
        console.log(`${this.name} say hello!`);
    }
}
var ani=new Animal('动物');
console.log(ani.eat());
var dog=new Dog('小狗');
console.log(dog.eat());
var cat=new Cat('小猫咪');
console.log(cat.eat());
cat.say();

console.log("--------------------------------------------------------------------------");

//抽象类和抽象方法      用来定义标准
//typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
//用abstract定义抽象方法 只能放在抽象类里面
//abstract 翻译 摘要

abstract class People{
    public name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract eat():any;  //抽象方法不包含具体实现并且必须在派生类中实现。
    //如果你手贱写了 eat的实现 也会报错 error TS1245: Method 'eat' cannot have an implementation because it is marked abstract.
    run(){
        console.log('普通方法 也被继承 但不对子类有约束')
    }
}
//var peo=new People('人名'); //错误 直接用abstract 定义的抽象类 不可以被实例化
class Coder extends People{
    constructor(name:string){
        super(name);
    }
    //抽象类的子类必须实现抽象类里面的抽象方法
    //如不包含eat方法Coder类 会报错： Non-abstract class 'Coder' does not implement inherited abstract member 'eat' from class 'People'.
    eat():void{
        console.log(`${this.name}--吃外卖`)
    }
}
var coder=new Coder('程序猿');
coder.eat();    //程序猿--吃外卖
coder.run();    //普通方法 也被继承 但不对子类有约束