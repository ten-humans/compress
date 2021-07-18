import { packType, ScoreType } from "../interface/process";
import Sort from "../sortObject";

export function ReadData(data: string): ScoreType {
  let score: ScoreType = {};
  for (let index = 0; index < data.length; index++) {
    (score as any)[data.charAt(index)] = score[data.charAt(index)] + 1 || 1;
  }
  return score;
}

export function process(data: string, map: object): string {
  let r = "";
  let m = Object.keys(map).reverse();
  for (let index = 0; index < data.length; index++) {
    r = `${r}${m.indexOf(data[index])} `;
  }
  return r;
}

export default function pack(data: string): packType {
  let m = Sort(ReadData(data));
  return { v: process(data, m), m };
}
