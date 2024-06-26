import Image from 'next/image';
import React from 'react';
import { RiStarFill } from 'react-icons/ri';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import ContactUsForm from './ContactUsForm';

const DriverCard = ({
  driver = {
    id: 1,
    attributes: {
      name: '',
      typeOfVehicle: '',
      yearsInBusiness: '',
      operationArea: '',
    },
  },
}) => {
  const {
    id,
    attributes: { name, typeOfVehicle, yearsInBusiness, operationArea },
  } = driver;

  return (
    <div className='min-h-[430px] max-w-[24rem] shadow-lg rounded overflow-hidden bg-white flex flex-col justify-between hover:shadow-xl transition duration-300 ease-in-out'>
      <Link href={`/details/${id}`} passHref>
        <div className='cursor-pointer'>
          {/* Image placeholder */}
          <div className='relative w-full overflow-hidden'>
            <Image
              src='/driver-1.webp'
              width={240}
              height={296}
              alt='Vehicle'
              className='w-full object-cover hover:scale-105 transition duration-300 ease-in-out'
            />
          </div>

          {/* Driver Details */}
          <div className='p-4 flex-1 flex flex-col justify-between'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-xl font-semibold'>{name || 'Driver Name'}</h1>
              <p className='text-gray-500 text-sm'>
                {typeOfVehicle || 'Type of Vehicle'}
              </p>
              <p className='text-gray-500 text-sm'>
                Years in Business: {yearsInBusiness || 'N/A'}
              </p>
              <p className='text-gray-500 text-sm'>
                Operation Area: {operationArea || 'Location'}
              </p>
            </div>
            <div className='border-t pt-3 mt-3'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <div className='text-orange-400'>
                    <div className='flex items-center'>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className='text-gray-500 text-sm'>0 Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Dialog className='w-[90vw]'>
        <DialogTrigger asChild>
          <button className='text-blue-400 font-bold px-4 py-2 rounded hover:bg-blue-100 mt-2'>
            Contact
          </button>
        </DialogTrigger>
        <DialogContent>
          <ContactUsForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DriverCard;
