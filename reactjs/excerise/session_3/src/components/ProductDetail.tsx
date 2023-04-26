import React from "react";
import Product from "type/product";
import { useProduct } from "@context/productContext";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
    product: Product;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
    const { product: productData, setProduct } = useProduct();

    const handleFavorite = (productId: number) => {
        setProduct({ type: "FAVORITES", favorites: productId });
    };

    const isFavorite = productData.favorites.includes(product.id);

    return (
        <div className="product-details-container">
            <div className="product-details">
                <img src={product.img} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                <div className="product-image">{product.title}</div>
            </div>
            <div className="add-to-cart">
                <button
                    type="button"
                    className="button"
                    onClick={() => handleFavorite(product.id)}
                >
                    {isFavorite ?
                        (
                            <span>
                            <FavoriteBorderIcon style={{ color: 'red' }} />
                        </span>
                        )
                        :
                        (
                            <span>
                                <FavoriteBorderIcon />
                            </span>
                        )}
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;