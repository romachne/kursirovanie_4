import React from 'react'
import useFetchDataComponent from "./use-fetch-data.component";

const DishesListComponent = () => {
    const {
        data,
        loading,
    } = useFetchDataComponent();

    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && (
                <div>
                    {data.map((item) => {
                        return(
                            <div className='dish' key={item.id}>
                                <h2>{item.title}</h2>
                                <h4>{item.style}</h4>
                                <h4>{item.quantity}</h4>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default DishesListComponent;
