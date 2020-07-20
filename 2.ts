//ts中 约束 方法 的形参 和 输入



//es5定义函数两种方式
function fna(){ //函数声明法
    return 23;
}
const fnb=function(){    //匿名函数
    console.log('匿名函数')
}
//ts 定义函数 也是这两种
function fnc(a:string,b:number):string{ //函数声明法
    return `${a}${b}`
}
console.log(fnc('fage',29));
let fnd=function(a:string,b:boolean):string{   //匿名函数
    return `${a}${b}`
}
console.log(fnd('fage',false));

console.log("--------------------------------------------------------------------------");

//可选参数 (默认指定了参数类型 参数都是必传的)
function fne(name:string,age?:number):string{
    if(age){
        return `${name}--${age}`;
    }else{
        return `${name}--年龄保密`;
    }
}
console.log(fne('fage'))
//注意可选参数 必须配置到参数的最后面
//function getinfo(name?:string,like:string):string(){ ... }
//getinfo('abc')

function fnf(name:string,like?:string,think?:string):string{
    return `${name},${like},${think}`
}
console.log(fnf('fage','aa'))
//可选参数 后面不可再有必填参数 可多个连续可选参数

console.log("--------------------------------------------------------------------------");

//剩余参数 约束类型
//es6 function fn(a,...d){}
function sum(n:number,...other:number[]):number{
    var num=n;
    for(var i=0,len=other.length;i<len;i++){
        num+=other[i];
    }
    return num;
}
console.log(sum(1,2,3,4,5,6));  //21

console.log("--------------------------------------------------------------------------");

//函数重载
//java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
// typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
//ts为了兼容es5 以及 es6 重载的写法和java中有区别。
function getInfo(name:number):string;
function getInfo(name:string,age:number):string;
function getInfo(name:any,age?:any):any{
    if(age){
        return '我叫：'+name+'我的年龄是'+age;
    }else{
        return '我叫：'+name;
    }
}
console.log(getInfo('张三',29));   //正确
console.log(getInfo(20));   //正确
//console.log(getInfo(true,29));   //错误
//实际效果 也就只是扩展了同一个方法的 参数类型和返回类型 最终调用当前函数 都是执行最后一个覆盖的同名方法
