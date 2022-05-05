//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

//node packages
// http or files modules
// external ones, install first
//Difference between
// node packages, http and file
//External ones, install first
// We know we will not able it find it

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

//Will split
const newItems = _.flattenDeep(items);
console.log(newItems);
