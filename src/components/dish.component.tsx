import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {fetchDishes} from "../store/dish-actions";

const Dish = () => {
    // const [dish_id, setDish_id] = useState(1);
    const dispatch = useAppDispatch();
    const alldishes = useAppSelector(state => state.dish.all_dishes);
    // const particularDish = useAppSelector(state => state.dish.particular_dish);
    // const clickHandler = () => {
    //     dispatch(fetchDishes())
    //     console.log('243')
    // }
    useEffect(() => {
        dispatch(fetchDishes())
    }, [dispatch])
    // const searchHandler = () => {
    //     dispatch(fetchParticularDish(dish_id))
    // }
    const checkDish = (): boolean => {
        return alldishes.length !== 0;
    }
    // const checkparticularDish = (): boolean => {
    //     return particularDish.id !== 0;
    // }

    return (
        <>
            <div>
                {/*<button onClick={clickHandler}>All Dishes</button>*/}
                <div>
                    <h3>Dish List:</h3>
                    {checkDish() &&
                        alldishes.map((dish) => (
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
