'use client';
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
  SheetClose,
} from '@/components/ui/sheet';
import SearchComponent from './SearchComponent';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';
import { DoorClosed } from 'lucide-react';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const router = useRouter();
  const { authState, logout } = useAuth();
  console.log(authState);

  return (
    <div className='bg-white shadow-md px-4'>
      <div className='flex justify-between items-center px-4 py-2 md:py-4'>
        <div
          onClick={() => {
            router.push('/');
          }}
          className='cursor-pointer'
        >
          <h1 className='text-2xl font-bold text-primary'>Driver Listing</h1>
        </div>
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <button onClick={toggleMenu}>
                <FiMenu className='text-2xl' />
              </button>
            </SheetTrigger>
            <SheetContent
              side='left'
              className={`${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <SheetHeader>
                <SheetTitle>Driver Listing</SheetTitle>
              </SheetHeader>
              <SheetDescription className='flex-col'>
                <Link href='/' className='hover:text-primary'>
                  Home
                </Link>
                <Link href='/listings' className='hover:text-primary'>
                  Listing
                </Link>
                <Link href='/about' className='hover:text-primary'>
                  About Us
                </Link>
                <Link href='/contact' className='hover:text-primary'>
                  Contact Us
                </Link>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
        <div className='flex-grow lg:flex lg:items-center justify-center hidden'>
          {' '}
          {/* Desktop view links */}
          <div className='flex lg:gap-4 text-md'>
            <Link href='/' className='hover:text-primary'>
              Home
            </Link>
            <Link href='/listings' className='hover:text-primary'>
              Listing
            </Link>
            <Link href='/about' className='hover:text-primary'>
              About Us
            </Link>
            <Link href='/contact' className='hover:text-primary'>
              Contact Us
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <VscSearch className='mr-4 cursor-pointer' onClick={toggleSearch} />
          <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <SheetContent side='top' className='w-screen'>
              <SheetHeader>
                <SheetTitle>Search Drivers</SheetTitle>
                <SheetDescription>
                  Enter your search criteria to find drivers.
                </SheetDescription>
              </SheetHeader>
              <SearchComponent bgColor='bg-slate-200' />{' '}
              {/* Include the SearchComponent inside the SheetContent */}
              <SheetClose onClick={toggleSearch}>Close</SheetClose>
            </SheetContent>
          </Sheet>
          {!authState.jwt ? (
            <button
              className='flex items-center gap-1 px-4 bg-primary rounded p-2 text-white'
              onClick={() => {
                router.push('/login');
              }}
            >
              <span className='hidden lg:block'>Sign in</span>
              <LiaSignInAltSolid className='text-xl lg:text-lg' />
            </button>
          ) : (
            <button
              className='flex items-center gap-1 px-4 bg-primary rounded p-2 text-white'
              onClick={() => {
                router.push(`/viewlisting/${authState.user.id}`);
              }}
            >
              <span className='hidden lg:block'>View Listing</span>
              <LiaSignInAltSolid className='text-xl lg:text-lg' />
            </button>
          )}
          {!authState.jwt ? (
            <button
              className='flex items-center gap-1 px-4 bg-primary rounded p-2 text-white'
              onClick={() => {
                router.push('/signup');
              }}
            >
              <span className='hidden lg:block'>Add Listing</span>
              <MdOutlineAddCircleOutline className='text-xl lg:text-lg' />
            </button>
          ) : (
            <button
              className='flex items-center gap-1 rounded p-2 px-4 text-white bg-red-500'
              onClick={() => {
                logout();
              }}
            >
              <DoorClosed className='text-xl lg:text-lg' />
              <span className='hidden lg:block'>Logout</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
