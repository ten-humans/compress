# Compress

폴더를 파일로 변환해주는 변환기입니다.

| ❗  | 디렉토리를 파일로 변환시켜주는 역할만 합니다. 용량은 똑같거나 더 늘어납니다. |
| --- | ---------------------------------------------------------------------------- |

## 설치

[npm](https://www.npmjs.com/package/xyclonjs-cp)을 통해 설치하실 수 있습니다!

```bash
npm install xyclonjs-cp # yarn add xyclonjs-cp
```

## 사용

변환된 폴더는 `out.xyz`로 저장됩니다. 또, 절대 경로를 제공해야합니다. [예시 보기](https://github.com/ten-humans/compress/tree/main/test)

```js
const { readFileSync } = require("fs");
const { join } = require("path");
const c = require("xyclonjs-cp");

c.packing(join(__dirname, "./in"), __dirname); // pack

const model = JSON.parse(readFileSync(join(__dirname, "./out.xyz")).toString());

c.unpacking(model, join(__dirname, "./out")); // Unpack
```
