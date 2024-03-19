'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DriverCard from './DriverCard';

function TabsComponent() {
  const [activeTab, setActiveTab] = useState("Location");
  const indicatorRef = useRef(null);
  const tabsRef = useRef([]);

  useEffect(() => {
    const activeTabIndex = tabsRef.current.findIndex(tab => tab.value === activeTab);
    if (activeTabIndex !== -1) {
      const activeTabElement = tabsRef.current[activeTabIndex].element;
      indicatorRef.current.style.transform = `translateX(${activeTabElement.offsetLeft}px)`;
      indicatorRef.current.style.width = `${activeTabElement.offsetWidth}px`;
    }
  }, [activeTab]);
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

  return (
    <div className='p-4 '>
      <Tabs defaultValue="Location" className="w-screen px-20 p-10" onValueChange={setActiveTab}>
        <TabsList className='flex gap-1 tab-list'>
          <TabsTrigger ref={el => tabsRef.current[0] = { element: el, value: "Location" }} value="Location">Location</TabsTrigger>
          <TabsTrigger ref={el => tabsRef.current[1] = { element: el, value: "Category" }} value="Category">Category</TabsTrigger>
          <TabsTrigger ref={el => tabsRef.current[2] = { element: el, value: "Age" }} value="Age">Age</TabsTrigger>
          <TabsTrigger ref={el => tabsRef.current[3] = { element: el, value: "Password" }} value="Password">Password</TabsTrigger>
          <div className="tab-indicator" ref={indicatorRef}></div>
        </TabsList>
        <TabsContent value="Location">
        <div className='container px-22 p-4 grid grid-cols-3 gap-10 items-center justify-center gap-y-8'>
        {DriversNear.map((driver, index) => (
                <DriverCard key={index} driver={driver} />
              ))}
              </div>
        </TabsContent>

      </Tabs>
    </div>
  );
}

export default TabsComponent;
