/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { deleteProduct } from "./features/ProductSlice"

function ProductItem({ product }) {

    const [isClickUpdate, setIsClickUpdate] = useState(false);

    const dispatch = useDispatch();

    const inputName = useRef();
    const inputPrice = useRef();

    const handleSubmitUpdate = () => {
        
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
                <div>
                    <div>
                        <label htmlFor="name">Dénomination</label>
                        <input type="text" id="name" value={product.name} ref={inputName} required/>
                    </div>
                    <div>
                        <label htmlFor="price">Prix</label>
                        <input type="text" id="price" value={product.price} ref={inputPrice} required/>
                    </div>
                    <div>
                        <button onClick={handleSubmitUpdate}>
                            Valider
                        </button>
                    </div>
                </div>
            )
        }

        </div>
    );
}

export default ProductItem;