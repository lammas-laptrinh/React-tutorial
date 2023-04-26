import React from "react";
import ProductItem from "./ProductItem";
import { useProduct } from "@context/productContext";

const ProductList: React.FC = () => {
  const { product } = useProduct();
  return (
    <section className="product-container" style={{display:'flex'}}>
      {product.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;