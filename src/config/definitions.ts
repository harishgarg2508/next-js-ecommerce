interface ProductType {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    description: string;
    category?: string;
}

export default ProductType;