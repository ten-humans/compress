"use strict";
exports.__esModule = true;
function unpack(data, map) {
    var r = "";
    var m = Object.keys(map).reverse();
    data.split(" ").forEach(function (e) {
        if (e !== "")
            r = "" + r + m[Number(e)];
    });
    return r;
}
exports["default"] = unpack;
