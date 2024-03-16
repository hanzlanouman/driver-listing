"use client";
import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { VscSearch } from 'react-icons/vsc';
import { LiaSignInAltSolid } from 'react-icons/lia';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import Link from 'next/link';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-2 md:py-4">
        <div>
          <h1 className="text-2xl font-bold text-primary">Driver Listing</h1>
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
                <SheetTitle>Menu</SheetTitle>
                <SheetClose asChild>
                  <button onClick={toggleMenu}>Close</button>
                </SheetClose>
              </SheetHeader>
              <SheetDescription>
                <Link href="/">Home</Link>
                <Link href="/listing">Listing</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
              </SheetDescription>
              <SheetFooter>
                <Button variant="outline" onClick={toggleMenu}>Close</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className={`hidden lg:flex lg:items-center md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className='flex lg:gap-4 md:gap-2 text-md'>
            <Link href='/' className='hover:text-primary'>Home</Link>
            <Link href='/listing' className='hover:text-primary'>Listing</Link>
            <Link href='/about' className='hover:text-primary'>About Us</Link>
            <Link href='/contact' className='hover:text-primary'>Contact Us</Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <VscSearch className="mr-4" />
          <button className="flex items-center gap-1 px-4 bg-primary rounded p-2 text-white">
            Sign in
            <LiaSignInAltSolid className="text-lg" />
          </button>

          <button className="flex items-center gap-1 rounded p-2 px-4 text-white bg-primary">
            <MdOutlineAddCircleOutline className="text-lg" />
            Add a Listing
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
