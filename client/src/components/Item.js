import React from 'react'

export default function Item(props) {
    const item = props;
    return (
        <div>
            <h3>{item.name}</h3>
            <div>{item.price}</div>
        </div>
    )
}
