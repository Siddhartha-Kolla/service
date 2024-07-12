 import React from 'react'
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { SlCreditCard } from "react-icons/sl";
// import { useCart } from '@/context/cartContext';

const Checkout = () => {
  return (
  <div>checkout</div>
//   function redirectToPay() {
    
//   }
//   const {cartItems, addCartItem,removeFromCart,cartCount,cartTotal,doesItemExist,subtractCartItem} = useCart();
//   return (
//     <div className=" flex flex-col justify-between items h-screen">
//       <Card className="mx-auto max-w-sm my-28">
//         <CardHeader>
//           <CardTitle className="text-xl">Bezahlen</CardTitle>
//           <CardDescription>
//             Geben Sie folgende Informationen an, um den Inhalt Ihres Warenkorbs zu kaufen
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="grid gap-4">
//             <div className="grid gap-2">
//               <Label>Gesamtsumme:</Label>
//               <Label>Zahlungsmethode wählen</Label>
//               <Label>Adresse</Label>
//               <Input
//                 id="adress"
//                 type="adress"
//                 placeholder="Musterallee 05, 98765 Beispielstadt"
//                 required
//               />
//             </div>
//             <Button type="submit" className="md:w-full flex gap-2 justify-center self-center md:self-auto w-[95%] mr-4" disabled={cartItems.length == 0} onClick={redirectToPay}>
//               <SlCreditCard className='h-6 w-6'/>
//               Bezahlen
//             </Button>
//             </div>
//             </CardContent>
//           </Card>
//           </div>
   )
 }
  
 export default Checkout  
      
//        <p>
//         Here should be the checkout, where people can pay the stuff, that is in their shoppingcart (or that was in their shoppingcart at the moment, they pressed the "Bezahlen" button)<br/>
//         We need the total they have to pay, maybe something where they can choose their paying method (like credit card, paypal, etc.), a input field, where they HAVE TO write the adress, 
//         their order should be delivered to (street, number, city), a button to commit the payment at the end<br/>
//         Also when they payed, there maybe should be a page or popup, that confirms, that the payment was succesfully, and that has a link back to the starting page 
//       </p> 