"use strict";
//知识点总结
var all;
(function (all) {
    //数据类型
    // boolean , number , string , array
    //元祖类型 tuple
    //枚举类型 enum
    //never 类型
    //任意类型 any
    //Unknown 类型
    //null , undefined
    //boolean , number , string
    var a = true;
    var b = 3;
    var c = 'abc';
    //array tuple
    var d = [1, 2, 3];
    var e = ['a', 'b', 'c'];
    var f = [1, 'a', true];
    //any null undefined
    var j = [4234];
    var h = null;
    var g;
    //never void
    var i = function () {
        throw new Error('不可到达的终点');
    };
    var k = function () { };
})(all || (all = {}));
