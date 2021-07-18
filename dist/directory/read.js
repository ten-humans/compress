"use strict";
exports.__esModule = true;
var fs = require("fs");
var path_1 = require("path");
var result = [];
function isdir(dir) {
    try {
        return fs.lstatSync(dir).isDirectory();
    }
    catch (err) {
        return false;
    }
}
function explore(dir, d) {
    if (d === void 0) { d = ""; }
    fs.readdirSync(dir).forEach(function (e) {
        if (isdir(path_1.join(dir, e))) {
            explore(path_1.join(dir, e), d + "\\" + e);
        }
        else {
            result.push(d + "\\" + e);
        }
    });
    return result;
}
function init() {
    result = [];
}
// Main Function
function ReadDirectory(dir) {
    init(); // INIT
    return explore(dir);
}
exports["default"] = ReadDirectory;
