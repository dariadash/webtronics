import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postData } from "./thunks";
import { User, InitialStateType, RequestStatus } from "./types";

const initialState: InitialStateType = {
    data: {
        id: 0,
        name: '',
        phone: '',
        email: '',
    },
    error: null,
    loading: false,
    status: ''
}


export const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {},
    extraReducers: {
        [postData.fulfilled.type]: (state, action: PayloadAction<User>) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
            state.status = RequestStatus.Succeeded;
        },
        [postData.pending.type]: (state) => {
            state.loading = true;
            state.status = RequestStatus.Loading;
        },
        [postData.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.status = RequestStatus.Failed;
        },
    }
})

export default chartSlice.reducer;