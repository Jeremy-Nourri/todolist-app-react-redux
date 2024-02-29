import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

function ProductList() {

    const products = useSelector(state => state.product.products);

    return ( 
        <>
            {
                products.map((product) => (
                    <ProductItem key={product.id} product={product} /> 
                ))
            }
        </>
     );
}

export default ProductList;