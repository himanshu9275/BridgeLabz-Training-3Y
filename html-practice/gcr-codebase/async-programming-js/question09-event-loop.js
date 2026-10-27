// Q9: Prediction: Script start, Script end, Promise callback, setTimeout callback.
console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");

// Promise handlers are microtasks, which run after synchronous code but before timer macrotasks.
