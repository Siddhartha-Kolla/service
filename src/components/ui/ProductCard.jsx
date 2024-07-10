import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LuPlusSquare } from "react-icons/lu";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { LuMinusSquare } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { useCart } from '@/context/cartContext';

const ProductCardControls = ({product,itemid}) => {
  const {cartItems, addCartItem,removeFromCart,cartCount,cartTotal,doesItemExist,subtractCartItem} = useCart();
  return(
    <div className=' grid grid-cols-3 place-items-center z-10' onClick={(e) => e.preventDefault()}>
      {itemid >= 0 &&
      (<Button variant="outline" size="icon" className="m-0 h-7 w-7 flex justify-center items-center" aria-label="Add to Cart" onClick={() => {subtractCartItem(product,1)}}>
        <LuMinus className='h-3 w-3'/>
        <span className='sr-only'>Zum Warenkorb hinzufügen</span>
      </Button>
        )}
      {itemid >= 0 &&
        (<Input className="h-7 w-11 m-0" type='number' inputMode="numeric" min="0" value={cartItems[itemid].quantity}/>)}
      <Button variant="outline" size="icon" className="m-0 h-7 w-7" aria-label="Add to Cart" onClick={() => {addCartItem(product,1)}}>
        <LuPlus className='h-3 w-3'/>
        <span className='sr-only'>Von Warenkorb entfernen</span>
      </Button>
    </div>
  )
}


const ProductCard = ({key,data,callfunc}) => {
  const {cartItems, addCartItem,removeFromCart,cartCount,cartTotal,doesItemExist,subtractCartItem} = useCart();
  let currentItemindex = cartItems.findIndex((obj) => obj.product === data)
  const addIt = (product,quantity) => {
    addCartItem(product,quantity);
    console.log(cartItems)
  }
  return (
    <a href="/" className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg z-[2]">
        <Card className="group rounded-lg border-2 h-full">
          <CardContent className="pt-4">
            <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg">
              <img
                src={`/img/${data.image}`}
                alt=""
                className="aspect-square object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start">
            <div>
              <p className="font-semibold text-lg">{data.name}</p>
              <p className="text-sm text-primary/80">{data.volume}L</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <div>
                {(data.ppl*data.volume).toFixed(2)}€
              </div>
              <ProductCardControls product={data} itemid={currentItemindex}/>
            </div>
          </CardFooter>
        </Card>
      </a>
  )
}

export default ProductCard;