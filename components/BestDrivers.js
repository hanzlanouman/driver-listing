import React from 'react'
import DoctorCard from './DriverCard'

const DriversNear = [
    {
        name: 'Charles Abels',
        age: 38,
        experience: 5,
        location: 'Lagos',
        images: '/driver-1.webp',
        reviews: 5,
        expertise: '    Van Driver',
    },
    {
        name: 'Charles Abels',
        age: 38,
        experience: 5,
        location: 'Lagos',
        images: '/driver-1.webp',
        reviews: 5,
        expertise: 'Van Driver',
    },
    {
        name: 'Charles Abels',
        age: 38,
        experience: 5,
        location: 'Lagos',
        images: '/driver-1.webp',
        reviews: 5,
        expertise: 'Van Driver',
    },
    {
        name: 'Charles Abels',
        age: 38,
        experience: 5,
        location: 'Lagos',
        images: '/driver-1.webp',
        reviews: 5,
        expertise: 'Van Driver',
    },
    {
        name: 'Charles Abels',
        age: 38,
        experience: 5,
        location: 'Lagos',
        images: '/driver-1.webp',
        reviews: 5,
        expertise: 'Van Driver',
    },
    {
        name: 'Charles Abels',
        age: 38,
        experience: 5,
        location: 'Lagos',
        images: '/driver-1.webp',
        reviews: 5,
        expertise: 'Van Driver',
    },
]
function BestDrivers() {
  return (
    <div className='bg-secondary p-10'>
    <h1 className='text-3xl font-bold text-center mt-10'>Best Drivers Near You</h1>

        <div className='container p-10 flex flex-wrap gap-10 items-center justify-center gap-y-8'>
        {DriversNear.map((driver, index) => (
                <DoctorCard key={index} driver={driver} />
              ))}
              </div>
    </div>
  )
}

export default BestDrivers