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
        <div>
        {
            !isClickUpdate ? (
                <div>
                    <div>
                        <p>Dénomination :</p>
                        <p>{product.name}</p>
                    </div>
                    <div>
                        <p>Prix :</p>
                        <p>{product.price}</p>
                    </div>
                    <div>
                        <button onClick={() => setIsClickUpdate(!isClickUpdate)}>
                            Modifier
                        </button>
                        <button onClick={() => dispatch(deleteProduct(product.id))}>
                            Supprimer
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmitUpdate}>
                    <div>
                        <label htmlFor="name">Dénomination</label>
                        <input type="text" id="name" defaultValue={product.name} ref={inputName}  required/>
                    </div>
                    <div>
                        <label htmlFor="price">Prix</label>
                        <input type="text" id="price" defaultValue={product.price} ref={inputPrice} required/>
                    </div>
                    <div>
                        <button type="submit" onSubmit={handleSubmitUpdate}>
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