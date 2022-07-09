import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {fetchDishes, fetchParticularDish} from "../store/dish-actions";

const Dish = () => {
    const [dish_id, setDish_id] = useState(1);
    const dispatch = useAppDispatch();
    const allDishes = useAppSelector(state => state.dish.all_dishes);
    const particularDish = useAppSelector(state => state.dish.particular_dish);
    const clickHandler = () => [
        dispatch(fetchDishes())
    ]
    const searchHandler = () => {
        dispatch(fetchParticularDish(dish_id))
    }
    const checkDish = (): boolean => {
        if (particularDish.id === 0) {
           return false
        }
        return true
    }

    return (
        <>
            <div>
                <button onClick={clickHandler}>All Dishes</button>
                <div>
                    <h3>Dish List:</h3>
                    {checkDish() &&
                        allDishes.map((dish) => (
                            <div key={dish.id}>
                                <p>{dish.id}</p>
                                <p>{dish.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Dish;
