import React from 'react'
import {useParams} from "react-router-dom";

export default function DishComponent() {
    const params = useParams();

    return (
        <div>
            <h1>Page 2 of {params.id}</h1>
    </div>
)
}
