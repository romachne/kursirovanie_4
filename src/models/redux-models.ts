export  interface DishModel{
    "id": number,
    "title": string,
    "style": string,
    "quantity": number,
    "restaurant": number
}
export interface  DishArrayModel{
    all_dishes: DishModel[],
    particular_dish: DishModel
}
