import {configureStore} from "@reduxjs/toolkit";
import dishSlice from "./dish-slice";

const store = configureStore(
    {
        reducer: {dish: dishSlice.reducer}
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
