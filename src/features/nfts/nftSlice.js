import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:{}
}

const nftSlice = createSlice({
    name: 'nfts',
    initialState,
    reducers:{
        addNfts:(state,{payload}) => {
            state.value = payload;
        }
    },
})

export const { addNfts } = nftSlice.actions;
export const getAllNfts = (state) => state.nfts.value;
export default nftSlice.reducer;