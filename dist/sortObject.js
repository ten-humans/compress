"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function Sort(data) {
    return Object.entries(data)
        .sort(function (a, b) { return a[1] - b[1]; })
        .reduce(function (_sortedObj, _a) {
        var _b;
        var k = _a[0], v = _a[1];
        return (__assign(__assign({}, _sortedObj), (_b = {}, _b[k] = v, _b)));
    }, {});
}
exports["default"] = Sort;
