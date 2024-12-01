import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        value: []
    },
    reducers: {
        addToUsers(state, action){
            state.value = [...state.value, action.payload]
        },
        removeFromUsers(state, action){
            state.value = state.value.filter(user => user.id !== action.payload.id)
        }
    }
})

export const { addToUsers, removeFromUsers } = usersSlice.actions;
export default usersSlice.reducer