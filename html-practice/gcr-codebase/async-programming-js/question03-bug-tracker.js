// Q3: Convert a callback-based API into a Promise-based API.
function fetchBugs(callback) {
  const possibleResults = ["UI glitch", "API timeout", "Login failure"];
  setTimeout(() => callback(possibleResults), 1000);
}

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error("Bug service is unavailable."));
        return;
      }
      fetchBugs(resolve);
    }, 200);
  });
}

getBugs()
  .then((bugs) => console.table(bugs.map((bug, index) => ({ id: index + 1, bug }))))
  .catch((error) => console.error("Could not load bugs:", error.message));
