
export default async function fetchproducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data =  await response.json();
        return data.products;
    } catch (error) {
        console.error("Failed to fetch products:", error);
    }
}

