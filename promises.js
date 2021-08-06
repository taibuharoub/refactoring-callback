// Refactoring callback functions to promises
const fs = require("fs/promises");

fs.readFile("file.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// you can promisify any asynchronous function that's using
// the error-first callback convention with util.promisify.
