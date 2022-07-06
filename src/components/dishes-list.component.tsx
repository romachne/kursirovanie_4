import React, {useEffect, useState} from 'react'
import axios from "axios";

export default function DishesListComponent() {
    const [dishes, setDishes] = useState<any[]>([]);

    useEffect(() => {
        getAllDishes();
    }, []);

    const getAllDishes = () => {
        axios.get("/api/dishes")
            .then((response) => {
                const allDishes = response.data;
                setDishes(allDishes);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    const displayDishes = () => {
        if (dishes.length > 0) {
            return(
                dishes.map((dish) => {
                    console.log(dish);
                    return(
                        <div className='dish' key={dish.id}>
                            <span>1</span>
                        </div>
                    )
                })
            )
        } else {
            return (<h3>2</h3>)
        }
    }

    return (
        <>
            {displayDishes()}
        </>
    )
}
