import React from 'react'
import Main from './Main'
import Basket from './Basket'
import Header from './Header'
import { useEffect, useState } from 'react'

function Cart({customer}) {
  const [costumes, setCostumes] = useState([])
  const InCartItems = costumes.cart_costumes
  // console.log(InCartItems)
  useEffect(() => {
  fetch(`http://localhost:3000/carts/${customer.id}`)
      .then((r) => r.json())
      .then((data) => setCostumes(data))
  }, []);
return (
  <div>
      <Header></Header>
    <div className="row" >
      <Main></Main>
      <Basket InCartItems={InCartItems}></Basket>
    </div>
  </div>
)
}

export default Cart