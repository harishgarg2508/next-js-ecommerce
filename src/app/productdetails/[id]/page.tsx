import ProductDetail from "@/components/ProductDetail";
import Navbar from "@/components/Navbar";
import getProductById from "@/services/productById";

interface ProductPageParams {
  params: {
    id: string;
  }
}
export default async function ProductDetailPage({ params }: ProductPageParams) {
  const product = await getProductById(params.id);

  if (!product) {
    return (
      <>
        <Navbar />
        <div>Product not found or error fetching product details.</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ProductDetail product={product} />
    </>
  );
}