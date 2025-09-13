import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "./modules/blogStore";


const store = configureStore({
    reducer: {
        blog: blogReducer
    },
})

export default store;