const fs = require("fs");

// Write data to a file (creates if not exists)
fs.writeFileSync("./info.txt", "Hello, Abhishek! This file is created using Node.js");

const data = fs.readFileSync("info.txt", "utf8");
console.log("File content:", data);

fs.appendFileSync("info.txt", "\nThis line was added later!");
console.log("Data appended!");

const data1 = fs.readFileSync("info.txt", "utf8");
console.log("File content:", data1);