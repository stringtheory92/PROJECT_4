import React from 'react'
import Main from './Main'
import Basket from './Basket'
import Header from './Header'
import { useEffect } from 'react'

function Cart({customer}) {
    useEffect(() => {
    fetch(`http://localhost:3000/carts/${customer.id}`)
        .then((r) => r.json())
        .then((data) => console.log(data))
    }, []);
  return (
    <div>
        <Header></Header>
      <div className="row" >
        <Main></Main>
        <Basket></Basket>
      </div>
    </div>
  )
}

export default Cart