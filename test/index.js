const { readFileSync } = require("fs");
const { join } = require("path");
const c = require("../dist/main");

c.packing(join(__dirname, "./in"), __dirname); // Pack

const model = JSON.parse(readFileSync(join(__dirname, "./out.xyz")).toString());

c.unpacking(model, join(__dirname, "./out")); // Unpack
