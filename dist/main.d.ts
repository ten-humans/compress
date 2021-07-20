import { packType } from "./interface/process";
export declare function packing(dir: string, out: string): packType;
export declare function unpacking(data: {
    m: object;
    v: string;
}, out: string): string;
