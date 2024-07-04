// Menu.js

import React from 'react';

function Menu({ ingredients, name, price, status, pic }) {
    return (
        <li className='pizza-list-li'>
            <img src={pic} alt={name} />
            <h3>{name}</h3>
            {/* Display other details like ingredients, price, and status if needed */}
        </li>
    );
}

export default Menu;
