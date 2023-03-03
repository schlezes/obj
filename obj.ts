function getLength({ obj }: { obj: string | string[]; }) {
  return obj.length;
}
console.log(getLength({ obj: "aaa" }))
