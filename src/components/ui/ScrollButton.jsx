import React, {useState} from 'react'; 
import { LuArrowUpCircle, LuShoppingCart } from "react-icons/lu";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const ScrollButton = () =>{ 
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 
  
  return ( 
    <Button variant="ghost" size="icon" className={cn(" rounded-full mr-2 fixed bottom-8 right-8 hidden",{"md:inline-flex":visible})} aria-label="Shopping Cart" onClick={scrollToTop}>
      <LuArrowUpCircle className='h-8 w-8'/>
      <span className=' sr-only'>Warenkorb</span>
    </Button>
  ); 
} 
  
export default ScrollButton; 