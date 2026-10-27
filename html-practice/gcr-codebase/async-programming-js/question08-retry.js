// Q8: Retry an unreliable order request up to three times.
function submitOrder() {
  return new Promise((resolve, reject) => setTimeout(() => {
    Math.random() < 0.5 ? resolve("Order submitted") : reject(new Error("Temporary API failure"));
  }, 600));
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success — ${result}`);
      return result;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed — ${error.message}`);
    }
  }
  throw new Error("Order could not be processed");
}

processOrder().catch((error) => console.error(error.message));
