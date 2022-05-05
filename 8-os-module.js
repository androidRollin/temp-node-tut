//OS
//Built in module
//access this module
const os = require("os");

//info about current user

const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime} seconds`);

//Not to cover each method

//How the built-in modules works

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

//File System

//FilePath
