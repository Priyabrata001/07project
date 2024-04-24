
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./menuItemSclice";


export const store = configureStore({
    reducer: {
        counter: counterReducer 
    },
});


