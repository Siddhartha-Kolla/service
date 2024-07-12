import React from 'react'
import { useCart } from '@/context/cartContext';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LuMinus, LuPlus, LuTrash2 } from 'react-icons/lu';

export const CartItem = (productdata) => {
  const {cartItems,cartCount,cartTotal} = useCart();
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