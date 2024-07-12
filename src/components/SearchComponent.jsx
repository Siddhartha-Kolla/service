import React from 'react'
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover";
import { Button } from "@/components/ui/button"
import { LuSearch } from "react-icons/lu";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"

const SearchComponent = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-6" aria-label="Search">
          <LuSearch className='h-6 w-6'/>
          <span className=' sr-only'>Suche</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Produktsuche</h4>
            <p className="text-sm text-muted-foreground">Geben Sie hier Ihr gesuchtes Produkt ein</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-0">
            <Label htmlFor="maxHeight"></Label>
            <Input id="maxHeight" defaultValue="" className="col-span-2 h-8"/>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default SearchComponent