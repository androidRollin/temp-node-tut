const { readFile, writeFile } = require("fs");

//readFile, writeFile
//callback, we run that callback when we are done
//whatever functionality we are doing
//add event listener
//that callback function will run

//It will do the function and after that it will execute the callback function using the result of the read file passed into the call back, de-structuring

//That is the first text file
//console log
//clear
//node app.js
//if we don't provide the utf coding
//The million dollar functionality
//Copy and past the functional;ity

//Start, off load  and continue with other code
//Line by line, starting the enxt one
//Offload and next to task
//off with the console
//implementation and callbacks
//promises and async and await
//some kind of tasks

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //Save in the first callback function
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-sync1.txt",
      `Here is the result : ${first}, ${second}, new job job offer`,
      { flag: "a" },
      (err, result) => {
        //Error quickly
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
