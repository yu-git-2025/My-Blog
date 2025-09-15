import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "./modules/blogStore";
import statusStore from "./modules/stateStore";


const store = configureStore({
    reducer: {
        blog: blogReducer,
        state: statusStore,
    },
})

export default store;