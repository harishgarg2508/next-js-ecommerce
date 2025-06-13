import ProductType from "@/config/definitions";

export default async function getProductById(id: string) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
            console.error(`Error fetching product ${id}: ${response.status}`);
            return null;
        }
        const data: ProductType = await response.json();
        return data;
    } catch (error) {
        console.error(`Failed to fetch product ${id}:`, error);
        return null;
    }
}
