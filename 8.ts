/*


11111
    装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
    通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
    
    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）

    装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一
*/
//修改ts中对装饰器的报错 https://www.jianshu.com/p/4c2bc81b75f0  

//222222
//类装饰器：普通装饰器 （无法传参)
function logClass(params:any){
    console.log(params);    //Function: Person7]
    params.prototype.apiUrl='动态扩展的属性';
    params.prototype.run=function(){
        console.log('我是一个run方法');
    }
}
@logClass
class Persona{
    constructor(){

    }
    getData(){

    }
}
var eafa:any=new Persona();
console.log(eafa.apiUrl)
eafa.run();


//类装饰器：装饰器工厂 （可传参)
function logaClass(params:string){
    return function(target:any){
        console.log(target) //[Function: Person6]
        target.prototype.apiurl=params;
        target.prototype.show=function(){
        
        }
    }
}
@logaClass('http://www.baidu.com') //结尾不要写 ;
class Person6{
    person6:string | undefined;
    constructor(name:string){
        this.person6=name;
    }
    show(){
        
    }
}
var sa:any=new Person6('11');
console.log(sa.apiurl)  //http://www.baidu.com


//重载类的属性和方法
/*
类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。 */
function logvClass(target:any){
    console.log(target);
    return class extends target{
        apiUrl:any='我是修改后的数据';
        getData(){
            this.apiUrl=this.apiUrl+'----';
            console.log(this.apiUrl);
        }
        /* 作为表达式调用时，无法解析类修饰器的签名。
        不能将类型“typeof (Anonymous class)”分配给类型“typeof HttpClient2”。
        类型 "(Anonymous class)" 中缺少属性 "getData"，但类型 "HttpClient2" 中需要该属性。 */
    }
}

@logvClass
class HttpClient2{
    public apiUrl:string | undefined;
    constructor(){
        this.apiUrl='我是构造函数里面的apiUrl';
    }
    getData(){
        console.log(this.apiUrl);
    }
}

var http=new HttpClient2();
console.log(http.apiUrl)   //我是修改后的数据
http.getData(); //我是修改后的数据----



//属性装饰器
/* 
属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
    第一个参数：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    第二个参数：成员的名字,装饰的属性/方法
*/
function logClassa(can:any){
    return function(params:any){
        params.prototype.api=can;
    }
}
//作用于实例成员 
function shiliProperty(params:any){
    return function(target:any,attr:any){   //第一个参数 类的原型对象 第二个参数 装饰的属性
        console.log(target);    //HttpClient { getData: [Function] }  类的原型对象
        console.log(attr);    //url
        target[attr]=params;
    }
}
//作用于静态成员
function staticProperty(params:any){
    return function(target:any,attr:any){ 
        console.log(target);    //[Function: HttpClient]  类的构造函数
        console.log(attr);    //staticattr
    }
}
@logClassa('类装饰器的入参')
class HttpClient{
    @shiliProperty('作用于实例成员的属性装饰器')
    public url:any |undefined;
    @staticProperty('作用于静态成员的属性装饰器')
    static staticattr:any | undefined;
    constructor(){
    }
    getData(){
        console.log(this.url);
    }
}
var httpaa:any=new HttpClient();
httpaa.getData();   //作用于实例成员的属性装饰器
console.log(httpaa.api);    //类装饰器的入参


//方法装饰器
    /* 它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。

    方法装饰会在运行时传入下列3个参数：
        1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
        2、成员的名字。
        3、成员的属性描述符。 */
//方法装饰器一

function get(params:any){
    return function(target:any,methodName:any,desc:any){
        console.log('______________________');
        console.log(target);    //HttpClient4 { getData: [Function] } 类的原型对象
        console.log(methodName);    //getData 需要装饰的方法名
        console.log(desc);  //{ value: [Function], writable: true, enumerable: true, configurable: true }
        target.apiUrl='xxxx';  //扩展实例属性
        target.run=function(){  //扩展实例方法
            console.log('run');
        }
    }
}

class HttpClient4{  
    public url:any |undefined;
    constructor(){
    }
    @get('http://www.itying,com')
    getData(){
        console.log(this.url);
    }
}

var http4:any=new HttpClient4();
console.log(http4.apiUrl);
http4.run();

//方法装饰器二
//修改装饰器的方法  把装饰器方法里面传入的所有参数改为string类型
function descriptionAllMethods(params:any){
    return function(target:any,methodName:any,desc:any){
        console.log(target);    //类的原型对象
        console.log(methodName);    //getData 需要装饰的方法名
        console.log(desc.value);      //[Function]
        
        var oMethod=desc.value; //1、保存当前的方法
        desc.value=function(...args:any[]){                
            args=args.map((value)=>{
                return String(value);
            })
            oMethod.apply(this,args);
        }
    }
}

class HttpClient3{  
    public url:any |undefined;
    constructor(){
    }
    @descriptionAllMethods('http://www.itying,com')
    getData(...args:any[]){
        console.log(args);
        console.log('我是getData里面的方法');
    }
    getInfo(...args:any[]){
        console.log(args);
        console.log('我是getInfo里面的方法');
    }
}

var http3:any=new HttpClient3();
http3.getData(123,true,'asefa');    //[ '123', 'true', 'asefa' ]
http3.getInfo(123,true);    //[ 123, true ]



//方法参数装饰器 
/*
参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据 ，传入下列3个参数：
    1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2、方法的名字。
    3、参数在函数参数列表中的索引。
*/


function logParams(params:any){
    return function(target:any,methodName:any,paramsIndex:any){
        console.log(params);    //传入参数
        console.log(target);    //类的原型对象
        console.log(methodName);    //方法名称
        console.log(paramsIndex);   //参数在函数参数列表中的索引 函数的第几个参数
        target.apiUrl=params;
    }   
}

class HttpClient6{  
    public url:any |undefined;
    constructor(){
    }           
    getData(@logParams('xxxxx') uuid:any){               
        console.log(uuid);
    }
}

var http6:any = new HttpClient6();  //0
http6.getData(123456);  //123456
console.log( http6.apiUrl); //xxxxx




//装饰器执行顺序
//属性》方法》方法参数》类
// 如果有多个同样的装饰器，它会先执行后面的

function logClass1(params:string){
    return function(target:any){
      console.log('类装饰器1')
    }
}

function logClass2(params:string){
    return function(target:any){
      console.log('类装饰器2')
    }
}

function logAttribute1(params?:string){
    return function(target:any,attrName:any){
      console.log('属性装饰器1')
    }
}

function logAttribute2(params?:string){
    return function(target:any,attrName:any){
      console.log('属性装饰器2')
    }
}

function logMethod1(params?:string){
    return function(target:any,attrName:any,desc:any){
      console.log('方法装饰器1')
    }
}
function logMethod2(params?:string){
    return function(target:any,attrName:any,desc:any){
      console.log('方法装饰器2')
    }
}

function logParams1(params?:string){
    return function(target:any,attrName:any,desc:any){
      console.log('方法参数装饰器1')
    }
}

function logParams2(params?:string){
    return function(target:any,attrName:any,desc:any){
      console.log('方法参数装饰器2')
    }
}

@logClass1('http://www.itying.com/api')
@logClass2('xxxx')
class HttpClient7{
    @logAttribute1()
    @logAttribute2()
    public apiUrl:string | undefined;
    constructor(){
    }
    @logMethod1()
    @logMethod2()
    getData(){
        return true;
    }
    setData(@logParams1() attr1:any,@logParams2() attr2:any,){

    }
}
var http7:any=new HttpClient7();
/* 属性装饰器2
属性装饰器1
方法装饰器2
方法装饰器1
方法参数装饰器2
方法参数装饰器1
类装饰器2
类装饰器1 */
