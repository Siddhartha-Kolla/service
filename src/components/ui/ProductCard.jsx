import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LuPlusSquare } from "react-icons/lu";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { LuMinusSquare } from "react-icons/lu";

const ProductCard = ({data,callfunc}) => {
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
                {data.ppl*data.volume}€
              </div>
              <div className=' grid grid-cols-3 place-items-center z-10' onClick={(e) => e.preventDefault()}>
                <Button variant="ghost" size="icon" className="m-0" aria-label="Add to Cart" onClick={(e) => hes(e)}>
                  <LuMinusSquare className='h-7 w-7'/>
                  <span className='sr-only'>Add to Cart</span>
                </Button>
                <Input className="h-7 w-11 m-0" type='number' inputMode="numeric" min="1"/>
                <Button variant="ghost" size="icon" aria-label="Add to Cart" onClick={(e) => callfunc(e,"This"," works")}>
                  <LuPlusSquare className='h-7 w-7'/>
                  <span className='sr-only'>Add to Cart</span>
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </a>
  )
}

export default ProductCard;