import React, {useState} from 'react'
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover";
import { Button } from "@/components/ui/button"
import { LuSearch } from "react-icons/lu";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CartItem } from './ui/CartItem';
import { useCart } from '@/context/cartContext';
import { LuMinus, LuPlus, LuTrash2 } from 'react-icons/lu';
import {cn} from "@/lib/utils";





export const SearchItem = (productdata) => {
  const {cartItems,cartCount,cartTotal} = useCart();
  let cartitemdata = productdata.data
  let currentItemindex = cartItems.findIndex((obj) => obj.product.id === cartitemdata.id)
  return (
    <div className='flex items-center inter-fonts-use border rounded-md'>
      <div className='relative h-24 w-24 overflow-hidden rounded m-1'>
        <img src={`/img/${cartitemdata.image}`} alt={cartitemdata.name} className='absolute object-cover' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' loading='lazy'/>
      </div>
      <div className="flex flex-1 flex-col gap-1 text-sm h-full py-5 mr-3">
        <span className="line-clamp-2">{cartitemdata.name}</span>
        <span className="line-clamp-1 text-xs capitalize text-muted-foreground pb-1">
          {cartitemdata.volume}L
        </span>
        <SearchItemActions product={cartitemdata} itemid={currentItemindex}/>
      </div> 
    </div>
  )

}

export const SearchItemActions = ({product, itemid}) => {
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
    <div className={cn('z-10 w-fit self-end',{"grid grid-cols-3 place-items-center": itemid >= 0,"grid grid-cols-1 place-items-center": !(itemid >= 0)})} onClick={(e) => e.preventDefault()}>
      {itemid >= 0 &&
      (<Button variant="outline" size="icon" className="m-0 h-7 w-7 flex justify-center items-center" aria-label="Add to Cart" onClick={() => {subtractCartItemfunc(product,1,itemid)}}>
        <LuMinus className='h-3 w-3'/>
        <span className='sr-only'>Zum Warenkorb hinzufügen</span>
      </Button>
        )}
      {itemid >= 0 &&
        (<Input className="h-7 w-11 m-0 bg-white dark:bg-inherit" type='number' inputMode="numeric" min="0" value={cartItems[itemid].quantity} onChange={(e) => {updateCartItemQuantity(product,e.target.value)}}/>)}
      <Button variant="outline" size="icon" className="m-0 h-7 w-7" aria-label="Add to Cart" onClick={() => {addCartItem(product,1)}}>
        <LuPlus className='h-3 w-3'/>
        <span className='sr-only'>Von Warenkorb entfernen</span>
      </Button>
    </div>
  )
}

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {data} = useCart();
  let filteredItems = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  filteredItems.length = Math.min(filteredItems.length,10);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-6" aria-label="Search">
          <LuSearch className='h-6 w-6'/>
          <span className=' sr-only'>Suche</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Produktsuche</h4>
            <p className="text-sm text-muted-foreground">Geben Sie hier Ihr gesuchtes Produkt ein</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-0">
            <Label htmlFor="maxHeight"></Label>
            <Input type="text" id="maxHeight" className="col-span-2 h-8" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
          </div>
        </div>
        {filteredItems.length == 0 && (<span className='mt-5 text-center line-clamp-1 text-l text-muted-foreground '>Keine Produkte gefunden</span>)}
        <ScrollArea className="h-full mt-5">
          <div className="grid gap-4 max-h-[700px]">
            
              {filteredItems.map((item,ind) => (
                <SearchItem data={item} key={ind}/>
                // <CartItem data={item} key={ind}/>
              ))}

          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}

export default SearchComponent