// Q6: Fetch products and show the first ten in the console.
async function loadProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const products = await response.json();
    console.table(products.slice(0, 10).map(({ title, price, image }) => ({ title, price, image })));
    return products;
  } catch (error) {
    console.error("Failed to load products. Please try again.", error.message);
    return [];
  }
}

loadProducts();
