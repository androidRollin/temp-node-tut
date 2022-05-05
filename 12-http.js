//Basics
//Create own server and API
//Abstraction
//Express
//Not going to cover anything in greatest detail

//Module -own
//Node - built in module
//There is more, world's biggest code store
//Build it from the scratch
//gogle or copy paste
//Someone somewhere has struggled the same issue
//Kind enough and share
//And add it into the project
//node + npm
//reuse our own code
//reuse with other developer
//share our own code

//Module
//1. Our Own
//2. Built in
//3. World's biggest open source

//Slider
//Two options
// 1. On own
// 2. From the scratch copy and paste
//Build it and share it

//Go through the docs and add into our project
//node + npm
//Node package manager
//Reuse our own code in project
//Use other developer
//npm share our project

//npm.js
//Useful utility
//Full-blown frameworks
//Create react app package
//npm
//node packages, few npm

//npm calles a reusable code a package
//modules and dependencies
//shareable javascript code
//package and dependencies
//no Quality control
//npm registry
//Useless pacakages
//Security and usability => amount of downloads
//If there is a bug, alreaady fixed it, working solution

//Focus on this more
//local dependecy => use this more
//npm i <packageName>

//Less for it setting up globally
//Eager to install these packages
//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//npm global command
//npm i <packageName>

//npm global command
//npm i <packageName>

//package.json - manifest file (stores important info about proejct/package)
//package.json in the root, create properties
//npm init
//npm init -y

const http = require("http");

//Request (requested) and Response (sending back)
//Web server, listening for request
//External module
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`<h1> Oops! </h1>
  <p> We can't seem to find the page you are looking for </p>
  <a href= "/"> back home </a>
  `);
  }
});

server.listen(5000);
