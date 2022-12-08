import React, { useEffect, useState } from 'react'
import CostumeCard from './CostumeCard'

function Cart({customer}) {
const displayedItems = customer?.cart_contents.map(costume => <CostumeCard key={costume.id} costume={costume}/>)
console.log(displayedItems)
return (
  <div>
    Hello world
    <div className="row" >
      {displayedItems}
    </div>
  </div>
)
}

export default Cart