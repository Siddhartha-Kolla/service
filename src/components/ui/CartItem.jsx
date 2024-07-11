import React from 'react'
import { Button } from "@/components/ui/button"
import { LuShoppingCart } from "react-icons/lu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Badge} from "@/components/ui/badge";
import  {Separator} from "@/components/ui/separator"
import  {ScrollArea} from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input"
import { LuMinus } from 'react-icons/lu';
import { LuPlus } from 'react-icons/lu';
import { LuTrash2 } from 'react-icons/lu';
import { SlCreditCard } from "react-icons/sl";
import { useCart } from '@/context/cartContext';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router-dom';


const components = [
  {
    title: "Wasser",
    href: "/water",
  },
  {
    title: "Saft",
    href: "/juice",
  },
  {
    title: "Softdrinks",
    href: "/drink",
  },
  {
    title: "warme Getränke",
    href: "/warm",},
  {
    title: "Bier",
    href: "/beer",
  },
  {
    title: "Wein",
    href: "/wine",
  },
  
]


export function CartSheet() {
  const {cartItems, addCartItem,removeFromCart,cartCount,cartTotal,doesItemExist,subtractCartItem} = useCart();
  const {isAuthenticated, loginWithRedirect} = useAuth0();
  const navigate = useNavigate();
  function redirectToPay() {
    if (isAuthenticated) {
      navigate("/checkout")
    }
    else {
      loginWithRedirect()
    }
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-2" aria-label="Shopping Cart">
          {cartCount > 0 &&
          (<Badge variant="secondary" className="absolute right-[7.5rem] md:right-32 lg:right-[8.5rem] top-2 g-6 w-6 h-6 rounded-full p-2">{cartCount}</Badge>)}
          <LuShoppingCart className='h-6 w-6'/>
          <span className=' sr-only'>Warenkorb</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle className=" text-2xl inter-fonts-use">Warenkorb {cartCount > 0 && `(${cartCount})`}</SheetTitle>
        </SheetHeader>
        <Separator className="px-1 mr-1"/>
        <div className="flex flex-1 flex-col gap-5 overflow-hidden">
          <ScrollArea className="h-full">
            {cartItems &&
              <div className="flex flex-col gap-5 pr-6">
              {cartItems.map((item,ind) => (
                <CartItem data={item.product} key={ind}/>
              ))}
            </div>}
          </ScrollArea>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="md:w-full flex gap-2 justify-center self-center md:self-auto w-[95%] mr-4" disabled={cartItems.length == 0} onClick={redirectToPay}>
              <SlCreditCard className='h-6 w-6'/>
              Bezahlen
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}


export const CartItem = (productdata) => {
  const {cartItems, addCartItem,removeFromCart,cartCount,cartTotal,doesItemExist,subtractCartItem} = useCart();
  let cartitemdata = productdata.data
  let currentItemindex = cartItems.findIndex((obj) => obj.product === cartitemdata)
  return (
    <div className='flex items-center inter-fonts-use border'>
      <div className='relative h-24 w-24 overflow-hidden rounded'>
        <img src={`/img/${cartitemdata.image}`} alt={cartitemdata.name} className='absolute object-cover' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' loading='lazy'/>
      </div>
      <div className="flex flex-1 flex-col gap-1 text-sm">
        <span className="line-clamp-1">{cartitemdata.name}</span>
        <span className="line-clamp-1 text-muted-foreground">
          {(cartitemdata.ppl*cartitemdata.volume).toFixed(2)}€ x {cartItems[currentItemindex].quantity} ={" "}
          {(cartitemdata.ppl*cartitemdata.volume*cartItems[currentItemindex].quantity).toFixed(2)}€
        </span>
        <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
          {cartitemdata.volume}L
        </span>
      </div>
      <CartItemActions product={cartitemdata} itemid={currentItemindex}/>
    </div>
  )

}

export const CartItemActions = ({product, itemid}) => {
  const {cartItems, addCartItem,removeFromCart,cartCount,cartTotal,doesItemExist,subtractCartItem,updateCartItemQuantity} = useCart();
  return (
    <div className=' grid grid-cols-4 place-items-center z-10' onClick={(e) => e.preventDefault()}>
      <Button variant="outline" size="icon" className="m-0 h-7 w-7 flex justify-center items-center" aria-label="Add to Cart" onClick={() => {subtractCartItem(product,1)}}>
        <LuMinus className='h-3 w-3'/>
        <span className='sr-only'>Noch ein Artikel hinzufügen</span>
      </Button>
      <Input className="h-7 w-11 m-0" type='number' inputMode="numeric" min="1" max={cartItems[itemid].product.capacity} value={cartItems[itemid].quantity} onChange={(e) => {updateCartItemQuantity(product,e.target.value)}}/>
      <Button variant="outline" size="icon" className="m-0 h-7 w-7" aria-label="Add to Cart" onClick={() => {addCartItem(product,1)}}>
        <LuPlus className='h-3 w-3'/>
        <span className='sr-only'>Ein Artikel entfernen</span>
      </Button>
      <Button variant="outline" size="icon" className="m-0 h-7 w-7" aria-label="Add to Cart" onClick={() => {removeFromCart(product)}}>
        <LuTrash2 className='h-3 w-3'/>
        <span className='sr-only'>Von Warenkorb entfernen</span>
      </Button>
    </div>
  )
}

// https://github.com/iorise/shopping-cart