const fs = require('fs');

const data2 = "Yo boy whats up";
const data3 = "You are good";

console.log("Start");
fs.writeFile('./text2.txt', data2, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("mid");
    }
});
console.log("end");
console.log("Rp is my man");

//npm install and npm uninstall are the things 