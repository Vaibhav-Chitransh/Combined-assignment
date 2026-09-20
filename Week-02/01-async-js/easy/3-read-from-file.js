// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

const startTime = Date.now();

// I/O bound task (async function)
fs.readFile("sample.txt", "utf-8", function (err, data) {
    if(err) {
        console.log("Error reading file");
    } else {
        const currTime = Date.now();
        console.log("Printing after " + (currTime - startTime)/1000 + " sec");
        console.log(data);
    }
})

// an expensive task (cpu-bound)
for(let i=0; i<10000000000; i++) {

}