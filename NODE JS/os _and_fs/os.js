const os = require("os");

console.log("Operating System:", os.type());
console.log("OS Platform:", os.platform());
console.log("OS Release:", os.release());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());
console.log("Uptime (in seconds):", os.uptime());