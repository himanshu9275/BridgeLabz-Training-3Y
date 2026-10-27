// Q5: The nested version makes the callback-hell problem visible.
const stages = ["Design complete", "Build complete", "Tests complete", "Deployment complete", "Celebration complete"];
const waitForStage = (message, callback) => setTimeout(() => { console.log(message); callback?.(); }, 1000);

function runWithCallbacks() {
  waitForStage(stages[0], () => waitForStage(stages[1], () => waitForStage(stages[2], () =>
    waitForStage(stages[3], () => waitForStage(stages[4])))));
}

const pause = (message) => new Promise((resolve) => setTimeout(() => { console.log(message); resolve(); }, 1000));

async function runWithAsyncAwait() {
  // Flat control flow is easier to read and makes error handling simpler.
  for (const stage of stages) await pause(stage);
}

runWithCallbacks();
setTimeout(runWithAsyncAwait, 6000);
