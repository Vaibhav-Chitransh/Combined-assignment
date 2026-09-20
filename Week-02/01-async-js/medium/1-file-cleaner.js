// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

fs.readFile("sample.txt", "utf-8", function (err, data) {
    if(err) {
        console.log("Error while reading the file");
    } else {
        let text = data.replaceAll(/\s+/g, ' ').trim();
        fs.writeFile("sample.txt", text, function () {
            console.log("Done cleaning the file");
        }) 
    }
})