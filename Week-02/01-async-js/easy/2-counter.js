// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

// Method 1
let prev = Date.now();
let i = 1;

while(true) {
    let curr = Date.now();
    if(curr - prev == 1000) {
        console.log(i++);
        prev = curr;
    }
}


// Method 2
let count = 0;

function startCounter() {
  console.log(count++);
  setTimeout(startCounter, 1000);
}

startCounter();
