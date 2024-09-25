import React from 'react'
import './NotFound.css'
import './sale.css'
import Header from '../components/Header'
import {Button} from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { LuArrowLeft } from 'react-icons/lu';
import { LuHome } from "react-icons/lu";
import Container from '@/components/ui/container.jsx';
import {Skeleton} from "@/components/ui/skeleton";

const NotFound = () => {
  let navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-screen">
			<Header/>
			<div className='flex flex-col lg:flex-row self-center flex-grow w-full lg:items-center lg:gap-x-40'>
				<div className='grid items-center justify-items-center max-w-lg self-center min-w-[50%] bg-blue-100 h-full'>
					<img src="/img/error-graphic3.jpg" alt="Offer Logo" className="self-end"/>
				</div>
				<div className="flex flex-col items-center gap-y-2">
          <div className='grid items-center gap-y-2'>
            <h1 className="font-bold text-6xl sm:text-7xl lg:text-9xl text-gray-700 dark:text-white text-center relative">404</h1>
            <h3 className="text-gray-600 dark:text-white">Oh oh! Die Seite wurde nicht gefunden.</h3>
          </div>
          <Button size="lg" className="w-[95%] md:w-full py-6 text-xl max-w-sm mt-10 group" onClick={() => navigate("/")}><LuHome className='mr-6'/>Zurück zur Startseite</Button>
				</div>
			</div>
		</div>
  )
}

export default NotFound