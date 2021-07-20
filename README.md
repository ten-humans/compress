# Compress

폴더를 파일로 변환해주는 변환기입니다.

| 🔨  | xyclonjs 프로젝트에 사용됩니다. [자세히 알아보기](https://github.com/xyclonjs) |
| --- | ------------------------------------------------------------------------------ |

## 사용

변환된 폴더는 `out.xyz`로 저장됩니다. 또 절대 경로를 제공해야합니다. [예시 보기](https://github.com/ten-humans/compress/tree/main/test)

```js
const { readFileSync } = require("fs");
const { join } = require("path");
const c = require("xyclonjs-cp");

c.packing(join(__dirname, "./in"), __dirname); // pack

const model = JSON.parse(readFileSync(join(__dirname, "./out.xyz")).toString());

c.unpacking(model, join(__dirname, "./out")); // Unpack
```
