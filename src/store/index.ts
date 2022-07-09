import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import dishSlice from "./dish-slice";

const store = configureStore(
    {
        reducer: {dish: dishSlice.reducer}
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export default store;
