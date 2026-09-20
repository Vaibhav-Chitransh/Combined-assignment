// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const newContent = "This is the new content of the file.";

fs.writeFile("sample.txt", newContent, function () {
    console.log("New content is written in the file");
})