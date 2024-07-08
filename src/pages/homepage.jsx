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

const hes = (e,s,t) => {
  e.preventDefault();
  console.log("HEllo World"+s+t)
}


const heroinfo = {
  title: "Sommer Refreshers!",
  heroimg: "/img/summer-refresh.jpg",
  butTitle: "Jetzt kaufen",
  butIcon: <LuShoppingBag className='mr-2'/>,
  butHref: "/juice",
}

const products = [
  {
    id: "1",
    volume: 6,
    name: "HohesC Multivitaminsaft C&D",
    price: "$3,999.00",
    image: "coca.jpg",
    ppl:0.5
  },
  {
    id: "2",
    volume: 6,
    name: "Sony A7S III",
    price: "$3,499.00",
    image: "FX3.png",
    category: "Wasser",
    ppl:0.5
  },
  {
    id: "3",
    volume: 6,
    name: "Sony A7C",
    price: "$1,599.00",
    image: "FX3.png",
    category: "Wasser",
    ppl:0.5
  },
  {
    id: "4",
    volume: 6,
    name: "Sony A7C",
    price: "$1,599.00",
    image: "FX3.png",
    category: "Wasser",
    ppl:0.5
  },
  {
    id: "5",
    volume: 6,
    name: "Sony A7C",
    price: "$1,599.00",
    image: "FX3.png",
    category: "Wasser",
    ppl:0.5
  },
  {
    id: "6",
    volume: 6,
    name: "Sony A7C",
    price: "$1,599.00",
    image: "FX3.png",
    category: "Wasser",
    ppl:0.5
  },
  {
    id: "7",
    volume: 6,
    name: "Sony A7C",
    price: "$1,599.00",
    image: "FX3.png",
    category: "Wasser",
    ppl:0.5
  },
  {
    id: "8",
    volume: 6,
    name: "Sony A7C",
    price: "$1,599.00",
    image: "FX3.png",
    category: "Wasser",
    ppl:0.5
  },{
    id: "9",
    volume: 6,
    name: "Sony A7C",
    price: "$1,599.00",
    image: "FX3.png",
    category: "Wasser",
    ppl:0.5
  }
  ,{
    id: "10",
    volume: 6,
    name: "Sony A7C",
    price: "$1,599.00",
    image: "FX3.png",
    category: "Wasser",
    ppl:0.5
  }
]

const sorts = ["water","softdrinks","beer","juice","warm","wine"]
const sortsTitles = ["Wasser","Softdrinks","Bier","Saft","warme Getränke","Wein"]

const apiCall = (setProductslist) => {
  axios.get('http://localhost:3001/all').then((response) => {
    //this console.log will be in our frontend console
    const data = response.data.data;
    let pl = []
    for (let i=0;i<data.length;i++) {
      pl.push({id:i,name:data[i].NAME,ppl:data[i].PPL,volume:data[i].VOLUME,first:data[i].FIRST,second:data[i].SECOND,third: data[i].THIRD,plastic:data[i].PLASTIC,glass:data[i].GLASS,image:data[i].IMAGE,category:data[i].CATEGORY,capacity:data[i].CAPACITY})
    }
    let pla = []
    for (let x=0;x<sorts.length;x++) {
      pla.push(pl.filter(product => product.category === sorts[x]))
    }
    console.log("Hello")
    console.log(pla)
    setProductslist(pla)
  })
}

const HomePage = () => {
  const [productslist, setProductslist] = useState([])
  console.log(productslist)

  useEffect(() => {
    apiCall(setProductslist)
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
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 w-full justify-center">
          <h2 className=' font-bold text-xl sm:text-2xl lg:text-3xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 carous-head'>{sortsTitles[index]}</h2>
          <div className="flex gap-y-8 px-4 sm:px-6 lg:px-8 w-full justify-center">
            <ProductCarousel items={productslist[index] ?? []} hes={hes} />
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