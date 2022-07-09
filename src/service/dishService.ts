import api from './api'
import {DishModel} from "../models/redux-models";

export default {
    async getAllDishes() {
        console.log("123")
        var response = await api().get('dishes');
        console.log(response)
        return response.data
    },
    async getParticularDish(dish_id: number) {
        var response = await api().get('dishes');
        return response.data.filter((dish: DishModel) => dish.id === dish_id)[0]
    }
}
