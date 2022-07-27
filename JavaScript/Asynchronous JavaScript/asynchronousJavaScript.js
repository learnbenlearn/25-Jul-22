function timeoutFunctionOne() {
    console.log(Date.now()/1000);
}

function timeoutFunctionTwo() {
    console.log(Date.now()/1000);
}

console.log(Date.now()/1000);

setTimeout(timeoutFunctionOne, 1000);
console.log('timeoutFunctionOne queued at ' + Date.now()/1000);
setTimeout(timeoutFunctionTwo, 1000);
console.log('timeoutFunctionTwo queued at ' + Date.now()/1000);

let intervalFunc = setInterval(() => {
    console.log('this interval occurred at ' + Date.now()/1000);
}, 1000);

setTimeout(() => {
    clearInterval(intervalFunc);
}, 5000);