//Modules
//yes, execute one file
//Javascript ES6 module
//Syntax, CommonJS
//Modules, ES6 modules => encapsulated code (only share the minimum)

//CommonJS, every file is module (by default)

//Every file is a module
//We are in charge on what we are sharing

//Import and set it into a variable
//This is a Function
const names = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

//Not assign to anything
require("./7-mind-grenade");
//object, or function
//module.exports

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);

//In seperate file, smaller files
