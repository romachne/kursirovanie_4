interface IDish {
    id: number
    title: string
    style: string
    quantity: number
    restaurant: number
}

type DishState = {
    dishes: IDish[]
}

type DishAction = {
    type: string
    dish: IDish
}

type DispatchType = (args: DishAction) => DishAction
