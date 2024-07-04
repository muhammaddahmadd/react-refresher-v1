// Pizza.js

import React from 'react';
import Menu from './Menu'; // Ensure correct import path

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function Pizza() {


    const pizzas = pizzaData;
    // const pizzas = 0;

    return (
        <ul className='pizza-list-ul'>
            {pizzas.length > 0 ? pizzas.map((pizza, i) => (
                <Menu
                    key={i}
                    name={pizza.name}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                    pic={pizza.photoName} // Ensure correct prop name
                    status={pizza.soldOut}
                />
            ))
                : "We are currently working on our Menu!"}

        </ul>
    );
}

export default Pizza;
