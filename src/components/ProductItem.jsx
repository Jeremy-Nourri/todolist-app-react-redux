/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { deleteProduct, updateProduct } from "./features/ProductSlice"

function ProductItem({ product }) {

    const [isClickUpdate, setIsClickUpdate] = useState(false);

    const dispatch = useDispatch();

    const inputName = useRef();
    const inputPrice = useRef();

    const handleSubmitUpdate = (e) => {

        e.preventDefault();

        const cleanPrice = parseFloat(inputPrice.current.value);
        const cleanName = inputName.current.value.toLowerCase().trim();

        const updatedProduct = {
            id: product.id,
            name: cleanName,
            price: cleanPrice
        }

        dispatch(updateProduct(updatedProduct)),
        setIsClickUpdate(false);
    }

    return (
        <div className="container-products">
        {
            !isClickUpdate ? (
                <div className="products__item">
                    <div className="item__sub-container">
                        <div className="sub-container__name">
                            <p className="name">Dénomination :</p>
                            <p>{product.name}</p>
                        </div>
                        <div className="sub-container__price">
                            <p className="price">Prix :</p>
                            <p>{product.price} €</p>
                        </div>
                    </div>
                    
                    <div className="item__sub-container">
                        <button className="button__update" onClick={() => setIsClickUpdate(!isClickUpdate)}>
                            Modifier
                        </button>
                        <button className="button__delete" onClick={() => dispatch(deleteProduct(product.id))}>
                            Supprimer
                        </button>
                    </div>
                </div>
            ) : (
                <form className="products__item products__item--form" onSubmit={handleSubmitUpdate}>
                    <div className="item__sub">
                        <label htmlFor="name">Dénomination</label>
                        <input type="text" id="name" defaultValue={product.name} ref={inputName}  required/>
                    </div>
                    <div className="item__sub">
                        <label htmlFor="price">Prix</label>
                        <input type="text" id="price" defaultValue={product.price} ref={inputPrice} required/>
                    </div>
                    <div className="item__sub">
                        <button className="button__validation" type="submit" onSubmit={handleSubmitUpdate}>
                            Valider
                        </button>
                    </div>
                </form>
            )
        }

        </div>
    );
}

export default ProductItem;