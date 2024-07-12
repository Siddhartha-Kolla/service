import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from './ui/ProductCard'

const ProductCarousel = ({items}) => {
  return (
    <Carousel opts={{align: "start",}} className="w-[90%] h-2/5 select-none">
      <CarouselContent className=" p-[2rem]">
        {items.map((item) => (
          <CarouselItem key={item.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <ProductCard data={item}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
  )
}

export default ProductCarousel