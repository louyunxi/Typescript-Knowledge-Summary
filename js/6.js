"use strict";
//类 也可以作为参数 来约束数据传入类型
//类 也是一种类型 它的实例属性及属性类型 可作为一个综合约束条件
//就像 number,string这些js原生类一样 我们自定的类 也可以作为一种类型去约束 入参 返回 
var User = /** @class */ (function () {
    function User(username, password, phome) {
        this.username = username;
        this.password = password;
        this.phome = phome;
    }
    return User;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.check = function (user) {
        return true;
    };
    MysqlDb.prototype.get = function (user) {
        return user;
    };
    return MysqlDb;
}());
var user = new User('louyunxi', '123456', 15212456958);
var Db = new MysqlDb();
console.log(Db.check(user));
console.log(Db.get(user));
var Db2 = new MysqlDb();
console.log(Db2.check({ username: 'fage', password: '78787878', phome: 17712345678 }));
//console.log(Db2.check({ username:'fage', password:'78787878', numbe:17712345678 }));    //类型“{ username: string; password: string; numbe: number; }”的参数不能赋给类型“User”的参数。
//console.log(Db2.check({ username:'fage', password:'78787878', phome:'saefasf' }));  //不能将类型“string”分配给类型“number | undefined”
console.log(Db2.get(user));
//配合泛型
var MysqlDb2 = /** @class */ (function () {
    function MysqlDb2() {
    }
    MysqlDb2.prototype.check = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb2.prototype.add = function (info) {
        return info;
    };
    return MysqlDb2;
}());
var ArtcleCate = /** @class */ (function () {
    function ArtcleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    ArtcleCate.prototype.show = function () {
        return this.title + '|' + this.desc;
    };
    return ArtcleCate;
}());
var article2 = new ArtcleCate({
    title: '文章标题',
    desc: '文章简介',
    status: 0,
});
var db3 = new MysqlDb2();
console.log(db3.check(article2)); //true
console.log(db3.add(article2)); //ArtcleCate { title: '文章标题', desc: '文章简介', status: 0 }
var user2 = new User('louyunxi', '123456', 15212456958);
//console.log(db3.add(user2)); //错误 类型“User”的参数不能赋给类型“ArtcleCate”的参数
//console.log(db3.add({ username: 'louyunxi', password: '123456', phome: 15212456958 })); 
//类型“{ username: string; password: string; phome: number; }”的参数不能赋给类型“ArtcleCate”的参数。
