import { configureStore } from "@reduxjs/toolkit";
import nftsReducer from "./nfts/nftSlice" 
export const store = configureStore({
    reducer : {
        nfts:nftsReducer,
    } 
})