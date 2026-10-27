// Q2: Synchronous code runs first, then Promise microtasks, then timer macrotasks.
console.log("Start");

setTimeout(() => console.log("setTimeout callback (macrotask)"), 0);
Promise.resolve().then(() => console.log("Resolved Promise callback (microtask)"));
console.log("Synchronous log");
console.log("End");

// Expected order: Start, Synchronous log, End, Promise callback, setTimeout callback.
