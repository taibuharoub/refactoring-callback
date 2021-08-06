const fs = require("fs");

fs.readFile("file.txt", (error, data) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log(data);
})