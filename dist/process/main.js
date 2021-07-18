"use strict";
exports.__esModule = true;
exports.process = exports.ReadData = void 0;
var sortObject_1 = require("../sortObject");
function ReadData(data) {
    var score = {};
    for (var index = 0; index < data.length; index++) {
        score[data.charAt(index)] = score[data.charAt(index)] + 1 || 1;
    }
    return score;
}
exports.ReadData = ReadData;
function process(data, map) {
    var r = "";
    var m = Object.keys(map).reverse();
    for (var index = 0; index < data.length; index++) {
        r = "" + r + m.indexOf(data[index]) + " ";
    }
    return r;
}
exports.process = process;
function Packing(data) {
    var m = sortObject_1["default"](ReadData(data));
    return process(data, m);
}
exports["default"] = Packing;
