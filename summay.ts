//知识点总结
namespace all{

//数据类型
// boolean , number , string , array
//元祖类型 tuple
//枚举类型 enum
//never 类型
//任意类型 any
//Unknown 类型
//null , undefined

    //boolean , number , string
    let a:boolean=true;
    let b:number=3;
    let c:string='abc';
    //array tuple
    let d:number[]=[1,2,3];
    let e:Array<string>=['a','b','c'];
    let f:[number,string,boolean]=[1,'a',true];
    //any null undefined
    let j:any=[4234];
    let h:null=null;
    let g:undefined | number;
    //never void
    let i=function():never{
        throw new Error('不可到达的终点')
    }
    let k=function():void{};
    


}