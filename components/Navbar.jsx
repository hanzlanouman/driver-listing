'use client'
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { VscSearch } from 'react-icons/vsc';
import { LiaSignInAltSolid } from 'react-icons/lia';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import SearchComponent from './Search';
import Link from 'next/link';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Search } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for SearchSheet visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-2 md:py-4">
        <div>
          <h1 className="text-2xl font-bold text-primary">Driver Listing</h1>
        </div>
        <div className="flex items-center gap-2">
          <VscSearch className="mr-4 cursor-pointer" onClick={toggleSearch} />
          <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen} className='w-screen' >
            <SheetContent side='top' className="w-screen ">
              <SheetHeader>
                <SheetTitle>Search Drivers</SheetTitle>
                <SearchComponent bgColor='bg-slate-200'/>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <button className="flex items-center gap-1 px-4 bg-primary rounded p-2 text-white">
            <span className='hidden lg:block'>Sign in</span>
            <LiaSignInAltSolid className="text-xl lg:text-lg" />
          </button>
          <button className="flex items-center gap-1 rounded p-2 px-4 text-white bg-primary">
            <MdOutlineAddCircleOutline className="text-xl lg:text-lg" />
            <span className='hidden lg:block'>Add a Listing</span>
          </button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button onClick={toggleMenu}>
                <FiMenu className="text-2xl" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className={`${isMenuOpen ? 'block' : 'hidden'}`}>
              <SheetHeader>
                <SheetTitle>Driver Listing</SheetTitle>
              </SheetHeader>
              <SheetDescription className='flex-col'>
                <Link href="/" className='hover:text-primary'>Home</Link>
                <Link href="/listings"  className='hover:text-primary'>Listing</Link>
                <Link href="/about"  className='hover:text-primary'>About Us</Link>
                <Link href="/contact"  className='hover:text-primary'>Contact Us</Link>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
