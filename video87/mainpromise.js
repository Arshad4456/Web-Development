import fs from "fs/promises";
let a = await fs.readFile("test2.txt");
console.log(a.toString());
