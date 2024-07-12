import React from 'react';
import Container from '@/components/ui/container'
import {Button} from '@/components/ui/button'
import { LuShoppingBag } from 'react-icons/lu';
import ProductList from '@/components/ProductList';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/cartContext';
import {cn} from "@/lib/utils";
import { twMerge } from 'tailwind-merge';


const CategoryComponent = ({sort,heroinfo}) => {
  const [productslist, setProductslist] = useState([])
  const {data} = useCart();

  useEffect(() => {
    let pla = data.filter((product) => product.category === sort)
    setProductslist(pla)
  }, [])
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <HeroComponent heroinfo={heroinfo}/>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={productslist} />
        </div>
      </div>
    </Container>
  )
}

const heroinfo = {
  heroimg: "/img/wein_hintergrund.jpg",
  heroimgClass: "",
  title: "Wein",
  titleClass: "",
  button: false,
  butIcon: null,
  butTitle: null,
  butClass: "hidden",
  butHref: ""
  
}

const HeroComponent = ({heroinfo}) => {

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
      <div
        style={{ backgroundImage: `url(${heroinfo.heroimg})` }}
        className={cn("rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover",heroinfo.heroimgClass)}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className={cn(" grid place-items-center gap-2 md:gap-5 font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg",heroinfo.titleClass)}>
            <p className='w-max'>{heroinfo.title}</p>
            <Button size="lg" className={cn("w-full py-6 text-xl",heroinfo.butClass)} onClick={() => navigate(heroinfo.butHref)}>
              {heroinfo.button && heroinfo.butIcon}
              {heroinfo.button && heroinfo.butTitle}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

}
export default CategoryComponent;