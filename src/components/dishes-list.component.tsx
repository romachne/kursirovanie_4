import React, {useEffect} from 'react'
import axios from "axios";

export default function DishesListComponent() {
    const url = 'http://127.0.0.1:8000/dishes/';
    const getAllNotes = () => {
        axios.get(`${url}`)
            .then((response) => {
                const allNotes = response.data.notes.allNotes;
            })
            .catch(error => console.error('Error: ${error}'));
    }

    useEffect(() => {
        getAllNotes();
    }, []);

    return (
        <div>
            <h1>Page 3</h1>
    </div>
)
}
