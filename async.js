const fs = require("fs/promises");

// Refactoring promises to async/await 
/* try {
   const data = await fs.readFile("file.txt");
   console.log(data);
} catch (error) {
    console.log(error);
} */

async function readFile() {
    try {
        const data = await fs.readFile("file.txt");
        console.log(data);
     } catch (error) {
         console.log(error);
     }
}

readFile();