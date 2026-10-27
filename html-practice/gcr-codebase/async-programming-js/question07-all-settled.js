// Q7: Promise.allSettled keeps results even when one request fails.
const later = (label, milliseconds) => new Promise((resolve, reject) => setTimeout(() => {
  Math.random() < 0.25 ? reject(new Error(`${label} failed`)) : resolve(`${label} Loaded`);
}, milliseconds));
const loadProfile = () => later("Profile", 2000);
const loadPosts = () => later("Posts", 1500);
const loadMessages = () => later("Messages", 1000);

async function loadDashboard() {
  const startedAt = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  results.forEach((result, index) => {
    const moduleName = ["Profile", "Posts", "Messages"][index];
    console.log(`${moduleName}: ${result.status === "fulfilled" ? result.value : result.reason.message}`);
  });
  console.log(`Total time: ${Date.now() - startedAt} ms`);
}

loadDashboard();
