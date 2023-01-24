import { axios } from "../../../http"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { User } from "./types"

export const postData = createAsyncThunk(
    'chart/fetchAll',
    async (postData: User, thunkAPI) => {
        try {
            const { data } = await axios.post('http://localhost:3004/feedback', postData)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue('Ошибка загрузки')
        }
    }
)