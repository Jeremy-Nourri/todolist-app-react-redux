import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./src/components/features/ProductSlice";

export default configureStore({
    reducer: {
        product: ProductSlice
    }
});