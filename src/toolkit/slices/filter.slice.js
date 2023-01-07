import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name:"filter",
    initialState:{
        name:"all"
    },
    reducers:{
        setFilter: (state,action) =>{
            state.name = action.payload;
        }
    }
});

export const{setFilter} = filterSlice.actions;
export default filterSlice.reducer;