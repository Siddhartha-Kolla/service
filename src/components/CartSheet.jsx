import React from 'react'
import { Button } from "@/components/ui/button"
import { LuShoppingCart } from "react-icons/lu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Badge} from "@/components/ui/badge";
import  {Separator} from "@/components/ui/separator"
import  {ScrollArea} from "@/components/ui/scroll-area";
import { SlCreditCard } from "react-icons/sl";
import { useCart } from '@/context/cartContext';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import { CartItem } from './ui/CartItem';

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

// https://github.com/iorise/shopping-cart