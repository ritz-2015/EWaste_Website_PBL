import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user:null,
        userLocation:null,
    },
    reducers: {
        addUser: (state,action) =>{
            state.user = action.payload;
        },
        addUserLocation: (state,action)=>{
            state.userLocation = action.payload
        },
        removeUser : (state,action) =>{
            state.user =null;
            state.userLocation =null
        }
    }
})

export const {addUser,addUserLocation,removeUser} = userSlice.actions;
export default userSlice.reducer;