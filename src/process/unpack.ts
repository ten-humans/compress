export default function unpack(data: string, map: object): string {
  let r = "";
  let m = Object.keys(map).reverse();
  data.split(" ").forEach((e) => {
    if (e !== "") r = `${r}${m[Number(e)]}`;
  });
  return r;
}
