// Q1: Promise chaining with a simulated asynchronous failure.
const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

function shouldFail() {
  return Math.random() < 0.15;
}

function boilWater() {
  return delay(1000).then(() => {
    if (shouldFail()) throw new Error("The kettle stopped working.");
    console.log("Water boiled");
  });
}

function brewCoffee() {
  return delay(1000).then(() => {
    if (shouldFail()) throw new Error("Coffee machine ran out of beans.");
    console.log("Coffee brewed");
  });
}

function pourCoffee() {
  return delay(1000).then(() => console.log("Coffee poured into a cup"));
}

boilWater()
  .then(brewCoffee)
  .then(pourCoffee)
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.error("Coffee process failed:", error.message));
