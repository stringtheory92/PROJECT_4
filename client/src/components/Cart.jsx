
import React, { useEffect, useState } from 'react'

function Cart({customer}) {
  const [costumes, setCostumes] = useState([])
  const InCartItems = costumes.cart_costumes
  console.log(customer)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:3000/carts/${customer.id}`)
      const data = await result.json();
      setCostumes(data);
      console.log(data)
    }
    fetchData();
  }, []);

return (
  <div>
    Hello world
      {/* <Header></Header>
    <div className="row" >
      <Basket InCartItems={InCartItems}></Basket>
    </div> */}
  </div>
)
}

export default Cart