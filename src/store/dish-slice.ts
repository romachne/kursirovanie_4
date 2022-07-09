import {DishArrayModel, DishModel} from "../models/redux-models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialDishState: DishArrayModel = {
    all_dishes: [],
    particular_dish: {
        "id": 0,
        "title": "",
        "style": "",
        "quantity": 0,
        "restaurant": 0
    }
}

const  dishSlice = createSlice({
    name: "dish",
    initialState: initialDishState,
    reducers: {
        setDishes(state, action: PayloadAction<DishModel[]>){
            state.all_dishes = action.payload;
        },
        setParticularDish(state, action: PayloadAction<DishModel>){
            state.particular_dish = action.payload;
        }
    }
})

export default dishSlice;
