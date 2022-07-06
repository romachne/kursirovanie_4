import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import AddDishComponent from "./components/add-dish.component";
import DishComponent from "./components/dish.component";
import DishesListComponent from "./components/dishes-list.component";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>} />
                    <Route path="add-dish" element={<AddDishComponent />} />
                    <Route path="dishes-list/:id" element={<DishComponent />} />
                    <Route path="dishes-list" element={<DishesListComponent />} />
                </Routes>
                <div className="list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="add-dish">Page 1</Link></li>
                        <li><Link to="dishes-list">Page 3</Link></li>
                        <li><Link to="dishes-list/311">Page 2</Link></li>
                    </ul>
                </div>
            </Router>
        </div>
    );
}

export default App;