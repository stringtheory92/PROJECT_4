import React, { useState, useEffect } from 'react'

let grandTotal = 0;

function BasketCard({costume}) {
    const [count, setCount] = useState(costume.id)
 
    const handleDelete = async () => {
        const response = await fetch(`/costumes/${costume.id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        setCount(count-1)
    }
 
    return (
        <div className="basket-card">
            <h2>{costume.name}</h2>
            <p>Price: ${costume.price}</p>
            <p>Count: {count}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
       
    )
}

export default BasketCard;
