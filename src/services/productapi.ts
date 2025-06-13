export default async function getData(currentPage: number = 0) {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${currentPage * 10}`
    );
    const data = await res.json();
    const total = data.total;
    return { products: data.products, total };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { products: [], total: 0 };
  }
}