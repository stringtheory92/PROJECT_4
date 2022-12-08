import React from 'react';

function Basket({InCartItems}) {
    return (
        <>
            <h2>Basket</h2>
            {InCartItems.map(item => (
                <div>
                    <p>Item: {item.name}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </>
    );
}

export default Basket;