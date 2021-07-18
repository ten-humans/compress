"use strict";
exports.__esModule = true;
exports.unpacking = exports.packing = void 0;
var fs_1 = require("fs");
var fse = require("fs-extra");
var path_1 = require("path");
var read_1 = require("./directory/read");
var pack_1 = require("./process/pack");
var unpack_1 = require("./process/unpack");
function packing(dir, out) {
  var r = [];
  read_1["default"](dir).forEach(function (e) {
    r.push({ e: e, v: fs_1.readFileSync(path_1.join(dir, e)).toString() });
  });
  fse.writeFileSync(
    path_1.join(out, "./out.xyz"),
    JSON.stringify(pack_1["default"](JSON.stringify(r)))
  );
  return pack_1["default"](JSON.stringify(r));
}
exports.packing = packing;
function unpacking(data, out) {
  var up = unpack_1["default"](data.v, data.m);
  if (!fs_1.existsSync(out)) {
    fs_1.mkdirSync(out);
  }
  JSON.parse(up).forEach(function (e) {
    fse.outputFileSync(path_1.join(out, e.e), e.v);
  });
  return "";
}
exports.unpacking = unpacking;
