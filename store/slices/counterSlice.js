import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    loading: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
})

export const { increment, decrement, incrementByAmount, setLoading } = counterSlice.actions

export default counterSlice.reducer