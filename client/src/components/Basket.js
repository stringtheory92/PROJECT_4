import React from 'react';
import Item from './Item';


export default function Basket(props){
    const InCartItems = props;
    return <aside className="block col-1 ">
        <h2>Cart Items</h2>
        <div>
            {InCartItems.map((item) => (
                <Item key={item.id} item={item}></Item>
            ))}
        </div>
    </aside>;
}