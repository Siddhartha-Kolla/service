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
import CategoryComponent from './categoryPageLayout';

const Wine = () => {
  const [productslist, setProductslist] = useState([])
  const {cartItems, addCartItem,removeFromCart,cartCount,cartTotal,doesItemExist,subtractCartItem,updateCartItemQuantity,data} = useCart();
  const heroinfo = {
    heroimg: "/img/wein_hintergrund.jpg",
    heroimgClass: "",
    title: "Wein",
    titleClass: "text-white",
    button: false,
    butIcon: null,
    butTitle: null,
    butClass: "hidden",
    butHref: ""
    
  }
  return (<CategoryComponent sort="water" heroinfo={heroinfo}/>)
}

export default Wine