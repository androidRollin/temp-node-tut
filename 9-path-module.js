const path = require("path");

console.log(path.sep);

//Normalized path
const filePath = path.join("/content", "subfolder", "test.txt");
//Last portion
console.log(filePath);

//base is /
const base = path.basename(filePath);

//Test .txt

//Path.resolve
//sequence to path

//In different path name
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

//Out application is going to run in different environement

//Absolute path
const absolute1 = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

//Local Machine

//Interacting with a file system
