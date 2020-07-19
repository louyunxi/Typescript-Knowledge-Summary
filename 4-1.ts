//函数类型接口  同时约束函数的入参和返回 批量
interface encrypt{
    (key:string,value:string):string;
}

var md5:encrypt=function(key:string,value:string):string{
    return 'md5-'+key+value;
}
console.log(md5('name','zhangsan'));

var sha1:encrypt=function(key:string,value:string):string{
    return 'sha1-'+key+value;
}
console.log(sha1('name','lisi'));

/* var sha2:encrypt=function(key:string,value:number):string{
    return 'sha2-'+key+value;
}
//如函数 参数没有按照接口约束 会报错 
//error TS2322: Type '(key: string, value: number) => string' is not assignable to type 'encrypt'.
//Types of parameters 'value' and 'value' are incompatible. */


//可索引接口
var arra:number[]=[2342,235325];
var arrb:Array<string>=['111','222'];
//可索引接口 也可以约束数组
interface UserArr{
    [index:number]:string;
}
//约束 某个对象 索引必须为数字 值为字符串
var arrc:UserArr=['aaa','bbb'];

interface UserObj{
    [index:string]:string
}
var obj:UserObj={name:'111',age:'111'};



//类类型接口  约束类  和抽象类 有点相似
interface Animal{
    name:string;
    eat(str:string):void;
}
//定义了约束类的接口 要求实现它的类 要有name属性，和eat方法
//implements不是继承 是实现
class Dogs implements Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    eat(){
        return `${this.name}吃狗粮`;
    }
}
var dogs=new Dogs('小黑');
dogs.eat();

class Cats implements Animal{
    name:string;
    constructor(name:string){

        this.name=name;

    }
    eat(food:string){

        console.log(this.name+'吃'+food);
    }
}

var ccc=new Cats('小花');
ccc.eat('老鼠');