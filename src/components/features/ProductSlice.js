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
        deleteTask: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
    }

})

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;