// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the counter
const initialState = {
    value: 0
};

// Create a slice for the counter
const counterSlice = createSlice({
    name: 'counter', // Name of the slice
    initialState, // Initial state
    reducers: {
        // Reducer for incrementing the count
        increment(state) {
            state.value += 1;
        },
        // Reducer for decrementing the count if it's greater than zero
        decrementIfGreaterThanZero(state) {
            if (state.value > 0) {
                state.value-= 1;
            }
        },
    },
});


export const { increment, decrementIfGreaterThanZero } = counterSlice.actions;


export default counterSlice.reducer;
