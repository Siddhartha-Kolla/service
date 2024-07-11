import React, { useContext } from 'react'
import Container from './ui/container'
import { Button } from "@/components/ui/button"
import { LuShoppingCart } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import Profile from './Profile';
import { LuMenu } from "react-icons/lu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Badge} from "@/components/ui/badge";
import  {Separator} from "@/components/ui/separator"
import  {ScrollArea} from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import './Header.css';
import { LuMinus } from 'react-icons/lu';
import { LuPlus } from 'react-icons/lu';
import { LuTrash2 } from 'react-icons/lu';
import { useCart } from '@/context/cartContext';
import { CartSheet } from './CartSheet';



const components = [
  {
    title: "Wasser",
    href: "/water",
  },
  {
    title: "Saft",
    href: "/juice",
  },
  {
    title: "Softdrinks",
    href: "/drink",
  },
  {
    title: "warme Getränke",
    href: "/warm",},
  {
    title: "Bier",
    href: "/beer",
  },
  {
    title: "Wein",
    href: "/wine",
  },
  
]

const CenterNavigationMenu = () => {
  return (
    <NavigationMenu className="mx-6 display:flex; items-center space-x-4-lg:space-x-6 hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Kategorien</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component,index) => (
                <li key={component.title}>
                  <NavigationMenuLink asChild className="group inline-flex h-9 w-full items-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50">
                    <a
                      href={component.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{component.title}</div>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a
              href="/sale"
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="text-sm font-medium leading-none">Reduziert</div>
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a
              href="/aboutus"
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="text-sm font-medium leading-none">Über Uns</div>
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className=' relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full'>
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <LuMenu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <NavigationMenu className="mx-6 flex items-center space-x-4-lg:space-x-6 md:hidden flex-grow">
                <NavigationMenuList className=" flex flex-col flex-grow w-full">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Kategorien</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {components.map((component) => (
                          <li key={component.title}>
                            <NavigationMenuLink asChild className="group inline-flex h-9 w-full items-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50">
                              <a
                                href={component.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{component.title}</div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <a
                        href="/"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Reduziert</div>
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <a
                        href="/"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Über Uns</div>
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              </SheetContent>
            </Sheet>
            <a href='/' className=' ml-4 lg:ml-0'>
              <img src='/img/logo-black.svg' id="nav-logo"/>
            </a>
          </div>
          <CenterNavigationMenu/>
          <div className="flex items-center">
            {/* <Button variant="ghost" size="icon" className="mr-2" aria-label="Shopping Cart">
              <LuShoppingCart className='h-6 w-6'/>
              <span className=' sr-only'>Warenkorb</span>
            </Button> */}
            <CartSheet/>
            <Button variant="ghost" size="icon" className="mr-6" aria-label="Search">
            <LuSearch className='h-6 w-6'/>
            <span className=' sr-only'>Suche</span>
            </Button>
            <Profile/>
          </div>
        </div>
          
      </Container>
    </header>
  )
}

export default Header;

// https://github.com/iorise/shopping-cart