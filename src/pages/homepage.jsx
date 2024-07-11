import React from 'react';
import Container from '@/components/ui/container'
import {Button} from '@/components/ui/button'
import { LuShoppingBag } from 'react-icons/lu';
import ProductList from '@/components/ProductList'
import ProductCarousel from '../components/ProductCarousel';
import './homepage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/cartContext';

const heroinfo = {
  title: "Sommer Refreshers!",
  heroimg: "/img/summer-refresh.jpg",
  butTitle: "Jetzt kaufen",
  butIcon: <LuShoppingBag className='mr-2'/>,
  butHref: "/juice",
}

const sorts = ["water","softdrinks","beer","juice","warm","wine"]
const sortsTitles = ["Wasser","Softdrinks","Bier","Saft","warme Getränke","Wein"]

const HomePage = () => {
  const [productslist, setProductslist] = useState([])
  const {cartItems, addCartItem,removeFromCart,cartCount,cartTotal,doesItemExist,subtractCartItem,updateCartItemQuantity,data} = useCart();

  useEffect(() => {
    // apiCall(setProductslist)
    let pla  = []
    for (let x=0;x<sorts.length;x++) {
      pla.push(data.filter(product => product.category === sorts[x]))
    }
    setProductslist(pla)
  }, [])
  let navigate = useNavigate();
  return (
    <div>
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(${heroinfo.heroimg})` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className=" grid place-items-center gap-2 md:gap-5 font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                <p className='w-max text-white'>{heroinfo.title}</p>
                <Button size="lg" className="w-full py-6 text-xl" onClick={() => navigate(heroinfo.butHref)}>
                  {heroinfo.butIcon}
                  {heroinfo.butTitle}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {sorts.map((sort, index) => (
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 w-full justify-center" key={sort}>
          <h2 className=' font-bold text-xl sm:text-2xl lg:text-3xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 carous-head'>{sortsTitles[index]}</h2>
          <div className="flex gap-y-8 px-4 sm:px-6 lg:px-8 w-full justify-center">
            <ProductCarousel items={productslist[index] ?? []} />
          </div>
        </div>
        ))}
        {/* <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 w-full justify-center">
          <h2 className=' font-bold text-xl sm:text-2xl lg:text-3xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 carous-head'>Wasser</h2>
          <div className="flex gap-y-8 px-4 sm:px-6 lg:px-8 w-full justify-center">
            <ProductCarousel items={products} hes={hes} />
          </div>
        </div> */}
      </div>
    </Container>
    </div>
  )
}

export default HomePage;