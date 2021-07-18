import { existsSync, fstat, mkdirSync, readFileSync, writeFileSync } from "fs";
import * as fse from "fs-extra";
import { join } from "path";
import ReadDirectory from "./directory/read";
import { packType } from "./interface/process";
import pack from "./process/pack";
import unpack from "./process/unpack";

export function packing(dir: string, out: string): packType {
  let r: object[] = [];
  ReadDirectory(dir).forEach((e) => {
    r.push({ e, v: readFileSync(join(dir, e)).toString() });
  });
  fse.writeFileSync(
    join(out, "out.xyz"),
    JSON.stringify(pack(JSON.stringify(r)))
  );
  return pack(JSON.stringify(r));
}
export function unpacking(data: { m: object; v: string }, out: string): string {
  const up = unpack(data.v, data.m);
  if (!existsSync(out)) {
    mkdirSync(out);
  }
  JSON.parse(up).forEach((e: { e: string; v: string }) => {
    fse.outputFileSync(join(out, e.e), e.v);
  });
  return "";
}
