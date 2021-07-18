import { join } from "path";
import ReadDirectory from "./directory/read";
import { packType } from "./interface/process";
import { packing, unpacking } from "./main";
import pack, { ReadData } from "./process/pack";
import unpack from "./process/unpack";

// TEST FUNCTION

/*
const p = pack("Hello, World!");

console.log(__dirname);
console.log(ReadDirectory(__dirname));
console.log(ReadData("Hello, World!"));
console.log(p.v);
console.log(unpack(p.v, p.m));
*/
const p = packing(__dirname, "./");
console.log(p);
console.log(unpacking({ m: p.m, v: p.v }, join(__dirname, "../out")));
