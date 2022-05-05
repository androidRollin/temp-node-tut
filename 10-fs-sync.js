//FS Module
//Interacting with a file system
//A new file

//Asynchronously, non-blocking
//Synchronously, blocking
//Prefer one after another
//Whole structure of the node
//non-blcoking node
//calback functions
//both methods

//Destructuring
//Simply in a content
//All the options

//Line by Line
//Take really long time
//Can't do anything
//Very simple example

const { readFileSync, writeFileSync } = require("fs");

console.log("start");

//path, and what is the encoding

//First
const first = readFileSync("./content/first.txt", "utf8");
//Second
const second = readFileSync("./content/second.txt", "utf8");
//See the both of the text
console.log(first, second);

//Node if not there create, overwrite
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  //Node will append this
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
