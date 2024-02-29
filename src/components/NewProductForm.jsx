import { useRef } from "react";
import { useDispatch } from "react-redux"
import { addProduct } from "./features/ProductSlice";

function NewProductForm() {

      const dispatch = useDispatch();

      const inputName = useRef();
      const inputPrice = useRef();
    
      const handleSubmit = (event) => {
        
        event.preventDefault();
        const cleanPrice = parseFloat(inputPrice.current.value);
        const cleanName = inputName.current.value.toLowerCase().trim();

        const newProduct = {
            name: cleanName,
            price: cleanPrice
        }

        dispatch(addProduct(newProduct));

        inputName.current.value = "";
        inputPrice.current.value = "";
      }
    
      return (  
        <>
          <form onSubmit={handleSubmit}>
            <h2>Ajouter un nouveau produit</h2>
            <label htmlFor="name">Dénomination</label>
            <input type="text" id="name" ref={inputName} required/>
            <label htmlFor="price">Prix</label>
            <input type="text" id="price" ref={inputPrice} required/>
            <button type="submit">Ajouter</button>
          </form>
          <hr />
        </>
      );
    }


export default NewProductForm;