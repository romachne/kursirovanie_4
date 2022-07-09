import dishSlice from "./dish-slice";
import {ThunkAction} from "@reduxjs/toolkit";
import {AnyAction} from "@reduxjs/toolkit";
import {RootState} from "./index";
import {DishModel} from "../models/redux-models";
import DishService from "../service/dishService";

export const dishActions = dishSlice.actions

export const fetchDishes = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        if(getState().dish.all_dishes.length === 0){
            const response: DishModel[] = await DishService.getAllDishes();
            dispatch(dishActions.setDishes(response))
        }
    }
}

export const fetchParticularDish = (dish_id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        const response: DishModel = await DishService.getParticularDish(dish_id);
        dispatch(dishActions.setParticularDish(response))
    }
}
