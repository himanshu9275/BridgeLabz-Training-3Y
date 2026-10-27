// Q4: Promise.all waits for both servers; Promise.race reports the first result.
function serverResponse(name, milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error(`${name} failed`));
      else resolve(`${name} responded in ${milliseconds / 1000} seconds`);
    }, milliseconds);
  });
}

const serverA = () => serverResponse("Server A", 2000);
const serverB = () => serverResponse("Server B", 3000);

Promise.all([serverA(), serverB()])
  .then((responses) => console.log("Deployment completed for all servers:", responses))
  .catch((error) => console.error("Deployment error:", error.message));

Promise.race([serverA(), serverB()])
  .then((firstResponse) => console.log("Fastest response:", firstResponse))
  .catch((error) => console.error("Race error:", error.message));
