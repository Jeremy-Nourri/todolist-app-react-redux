import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

function ProductList() {

    const products = useSelector(state => state.product.products);

    return ( 
        <div className="products-list">
            <h2>Ma liste de produits</h2>
            {
                products.map((product) => (
                    <ProductItem key={product.id} product={product} /> 
                ))
            }
        </div>
     );
}

export default ProductList;