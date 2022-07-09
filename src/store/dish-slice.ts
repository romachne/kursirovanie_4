import {DishArrayModel, DishModel} from "../models/redux-models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {text} from "stream/consumers";
import {AppDispatch, AppThunk} from "./index";

const initialDishState: DishArrayModel = {
    all_dishes: [],
    particular_dish: {
        "id": "0",
        "title": "",
        "style": "",
        "quantity": 0,
        "restaurant": 0
    },
}

const  dishSlice = createSlice({
    name: "dish",
    initialState: initialDishState,
    reducers: {
        newDish(state, action: PayloadAction<DishModel>){
          state.push(action.payload);
        },
        setDishes(state, action: PayloadAction<DishModel[]>){
            state.all_dishes = action.payload;
        },
        // setParticularDish(state, action: PayloadAction<DishModel>){
        //     state.particular_dish = action.payload;
        // }
    }
})

export const addDish = (
    title: string,
    style: string,
    quantity: number,
    restaurant: number
): AppThunk => async (dispatch: AppDispatch) => {
    const newDish : DishModel = {
        id: Math.random().toString(36).substr(2, 9),
        title: title,
        style: style,
        quantity: quantity,
        restaurant: restaurant,
    }

    dispatch(dishSlice.actions.newDish(NewDish))
}

export default dishSlice;
