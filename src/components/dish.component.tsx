import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
    dish: IDish
    removeDish: (dish: IDish) => void
}

export const Dish: React.FC<Props> = ({ dish, removeDish }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteDish = React.useCallback(
        (dish: IDish) => dispatch(removeDish(dish)),
        [dispatch, removeDish]
    )

    return (
        <div className="Dish">
            <div>
                <h1>{dish.title}</h1>
                <p>{dish.style}</p>
            </div>
            <button onClick={() => deleteDish(dish)}>Delete</button>
        </div>
    )
}
