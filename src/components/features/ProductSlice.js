import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                id: uuidv4(),
                name: action.payload.name,
                price: action.payload.price
            };
            
            state.products.push(newProduct);

        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const { id, name, price } = action.payload;
            const productIndexUpdated = state.products.findIndex((elem) => elem.id === id);
            state.products[productIndexUpdated] = { ...state.products[productIndexUpdated], name, price}
        }
    }

})

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;