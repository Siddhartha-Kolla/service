import React from 'react';
import Container from '@/components/ui/container'
import {Button} from '@/components/ui/button'
import { LuShoppingBag } from 'react-icons/lu';
import ProductList from '@/components/ProductList'

const hes = (e,s,t) => {
  e.preventDefault();
  console.log("HEllo World"+s+t)
}
const products = [
  {
    id: "1",
    volume: "6L",
    name: "HohesC Multivitaminsaft C&D",
    price: "$3,999.00",
    images: "/img/coca.jpg",
  },
  {
    id: "2",
    volume: "hello",
    name: "Sony A7S III",
    price: "$3,499.00",
    images: "/img/FX3.png",
  },
  {
    id: "3",
    volume: "ss",
    name: "Sony A7C",
    price: "$1,599.00",
    images: "/img/FX3.png",
  },
  {
    id: "4",
    volume: "ss",
    name: "Sony A7C",
    price: "$1,599.00",
    images: "/img/FX3.png",
  },
  {
    id: "5",
    volume: "ss",
    name: "Sony A7C",
    price: "$1,599.00",
    images: "/img/FX3.png",
  },
  {
    id: "6",
    volume: "ss",
    name: "Sony A7C",
    price: "$1,599.00",
    images: "/img/FX3.png",
  },
  {
    id: "7",
    volume: "ss",
    name: "Sony A7C",
    price: "$1,599.00",
    images: "/img/FX3.png",
  },
  {
    id: "8",
    volume: "ss",
    name: "Sony A7C",
    price: "$1,599.00",
    images: "/img/FX3.png",
  },{
    id: "9",
    volume: "ss",
    name: "Sony A7C",
    price: "$1,599.00",
    images: "/img/FX3.png",
  }
  ,{
    id: "10",
    volume: "ss",
    name: "Sony A7C",
    price: "$1,599.00",
    images: "/img/FX3.png",
  }
]

const Drink = () => {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(/img/coca-cola.jpg)` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                Featured Products
                <Button size="lg" className="w-full py-6 text-xl">
                  <LuShoppingBag className="mr-2" />
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} hes={hes} />
        </div>
      </div>
    </Container>
  )
}

export default Drink