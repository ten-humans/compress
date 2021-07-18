"use strict";
exports.__esModule = true;
var path_1 = require("path");
var main_1 = require("./main");
// TEST FUNCTION
/*
const p = pack("Hello, World!");

console.log(__dirname);
console.log(ReadDirectory(__dirname));
console.log(ReadData("Hello, World!"));
console.log(p.v);
console.log(unpack(p.v, p.m));
*/
var p = main_1.packing(__dirname, "./");
console.log(p);
console.log(main_1.unpacking({ m: p.m, v: p.v }, path_1.join(__dirname, "../out")));
