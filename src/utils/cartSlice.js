import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: []
    },
    reducers:{
        addItem : (state,action) =>{
           // * Vanilla (Older) Redux - DON'T MUTATE STATE, returning was mandotory
      /*
      const newState = [ ...state ];
      newState.items.push(action.payload)
      return newState
      */

      // * Redux Toolkit - We should have to mutate the state, returning is not mandotory
      // * RTK uses Immer.js behind the scenes
            //mutating the state
            state.items.push(action.payload);
        },
        removeItems: (state,action) =>{
            state.items.pop();
        },
         clearCart: (state,action) =>{
            state.items=[];
         },
    },
});


export const {addItem,removeItems,clearCart } =cartSlice.actions;

export default cartSlice.reducer;
