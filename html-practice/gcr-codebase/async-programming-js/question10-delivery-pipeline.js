// Q10: A sequential delivery pipeline with asynchronous delays and failures.
function deliveryStep(message) {
  const delay = 1000 + Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => setTimeout(() => {
    Math.random() < 0.15 ? reject(new Error(`${message} failed`)) : resolve(message);
  }, delay));
}

async function runPipeline() {
  try {
    console.log("Start Pipeline");
    console.log("Step 1:", await deliveryStep("Order taken"));
    console.log("Step 2:", await deliveryStep("Food prepared"));
    console.log("Step 3:", await deliveryStep("Package ready"));
    console.log("Step 4:", await deliveryStep("Out for delivery"));
    console.log("Delivery completed!");
  } catch (error) {
    // Await pauses only this async function; the event loop can run other queued work meanwhile.
    console.error("Pipeline failed!", error.message);
  }
}

runPipeline();
