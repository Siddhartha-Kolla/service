import React from 'react'


const Checkout = () => {
  return (
    <div className=" flex flex-col justify-between items h-screen">
      <p>
        Here should be the checkout, where people can pay the stuff, that is in their shoppingcart (or that was in their shoppingcart at the moment, they pressed the "Bezahlen" button)<br/>
        We need the total they have to pay, maybe something where they can choose their paying method (like credit card, paypal, etc.), a input field, where they HAVE TO write the adress, 
        their order should be delivered to (street, number, city), a button to commit the payment at the end<br/>
        Also when they payed, there maybe should be a page, that confirms, that the payment was succesfully, and that has a link back to the starting page 
      </p>
    </div>
  )
}

export default Checkout