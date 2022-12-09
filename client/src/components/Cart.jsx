import React from 'react'
import BasketCard from './BasketCard'
// import CostumeCard from './CostumeCard'

function Cart({customer}) {

const displayedItems = customer?.cart_contents.map(costume => <BasketCard key={costume.id} costume={costume} />)

let totalPrice = 0;
customer.cart_contents.forEach(costume => totalPrice += costume.price);

return (
  <div>
    <div className="basketSection">
      <h1 className="basket-header">Total: ${totalPrice.toFixed(2)}</h1>
      {displayedItems}
    </div>
  </div>
)
}

export default Cart;