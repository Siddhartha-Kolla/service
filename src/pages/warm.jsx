import React from 'react';
import Container from '@/components/ui/container'
import {Button} from '@/components/ui/button'
import { LuShoppingBag } from 'react-icons/lu';
import ProductList from '@/components/ProductList';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const hes = (e,s,t) => {
  e.preventDefault();
  console.log("HEllo World"+s+t)
}

const apiCall = (setProductslist) => {
  axios.get('http://localhost:3001/categories/?category=warm').then((response) => {
    //this console.log will be in our frontend console
    const data = response.data.data;
    let pl = []
    for (let i=0;i<data.length;i++) {
      pl.push({id:i,name:data[i].NAME,ppl:data[i].PPL,volume:data[i].VOLUME,first:data[i].FIRST,second:data[i].SECOND,third: data[i].THIRD,plastic:data[i].PLASTIC,glass:data[i].GLASS,image:data[i].IMAGE,category:data[i].CATEGORY,capacity:data[i].CAPACITY})
    }
    setProductslist(pl)
  })
}


const Warm = () => {
  const [productslist, setProductslist] = useState([])

  useEffect(() => {
    apiCall(setProductslist)
  }, [])
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
                warme Getränke
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={productslist} hes={hes} />
        </div>
      </div>
    </Container>
  )
}

export default Warm