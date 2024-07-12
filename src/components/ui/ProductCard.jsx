import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useCart } from '@/context/cartContext';
import {cn} from "@/lib/utils";

const ProductCardControls = ({product,itemid}) => {
  const {cartItems, addCartItem,removeFromCart,cartCount,cartTotal,doesItemExist,subtractCartItem,updateCartItemQuantity} = useCart();
  const subtractCartItemfunc = (product, quantity,itemId) => {
    if (cartItems[itemId].quantity - quantity == 0) {
      removeFromCart(product)
    }
    else {
      subtractCartItem(product,1);
    }

  }
  return(
    <div className={cn('z-10',{"grid grid-cols-3 place-items-center": itemid >= 0,"grid grid-cols-1 place-items-center": !(itemid >= 0)})} onClick={(e) => e.preventDefault()}>
      {itemid >= 0 &&
      (<Button variant="outline" size="icon" className="m-0 h-7 w-7 flex justify-center items-center" aria-label="Add to Cart" onClick={() => {subtractCartItemfunc(product,1,itemid)}}>
        <LuMinus className='h-3 w-3'/>
        <span className='sr-only'>Zum Warenkorb hinzufügen</span>
      </Button>
        )}
      {itemid >= 0 &&
        (<Input className="h-7 w-11 m-0 bg-white dark:bg-inherit" type='number' inputMode="numeric" min="0" value={cartItems[itemid].quantity} onChange={(e) => {updateCartItemQuantity(product,e.target.value)}}/>)}
      <Button variant="outline" size="icon" className="m-0 h-7 w-7" aria-label="Add to Cart" onClick={() => {addCartItem(product,1);console.log(cartItems[itemid])}}>
        <LuPlus className='h-3 w-3'/>
        <span className='sr-only'>Von Warenkorb entfernen</span>
      </Button>
    </div>
  )
}


const ProductCard = ({data}) => {
  const {cartItems} = useCart();
  let currentItemindex = cartItems.findIndex((obj) => obj.product.id === data.id)
  return (
    <a>
        <Card className="group rounded-lg border-2 h-full outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300">
          <CardContent className="pt-4">
            <div className="aspect-square relative bg-foreground/5 dark:bg-background rounded-lg grid grid-rows-1 grid-cols-1 justify-items-end">
              <img
                src={`/img/${data.image}`}
                alt=""
                className="aspect-square object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
              />
                <ProductCardControls product={data} itemid={currentItemindex} className="z-[4]"/>
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
            </div>
          </CardFooter>
        </Card>
      </a>
  )
}

export default ProductCard;