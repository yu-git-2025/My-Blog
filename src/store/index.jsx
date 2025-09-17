import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "./modules/blogStore";
import statusStore from "./modules/stateStore";
import userinfoStore from "./modules/userinfoStore";


const store = configureStore({
    reducer: {
        blog: blogReducer,
        state: statusStore,
        userinfo: userinfoStore,
    },
})

export default store;