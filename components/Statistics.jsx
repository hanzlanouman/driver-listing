'use client'
import React, { useState, useEffect, useRef } from 'react';

const useCounter = (start, end, duration, isVisible) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    if (!isVisible) return;
    const totalSteps = Math.ceil(duration / 10);
    const stepIncrement = (end - start) / totalSteps;
    let current = start;

    const timer = setInterval(() => {
      current += stepIncrement;
      setCount(Math.min(Math.floor(current), end));
      if (current >= end) {
        clearInterval(timer);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [isVisible, start, end, duration]);

  return count;
};

const StatisticsSection = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current);
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  const formatNumber = num => num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num.toString();

  const businessListings = useCounter(0, 59000, 1000, isVisible);
  const verifiedUsers = useCounter(0, 23000, 1000, isVisible);
  const newUsersPerMonth = useCounter(0, 5000, 1000, isVisible);
  const visitorsPerMonth = useCounter(0, 42000, 1000, isVisible);

  return (
    <div ref={ref} className="container mx-auto py-16 text-white">
      <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
        <div className="flex flex-col items-center">
          <p className="text-2xl lg:text-4xl font-bold text-primary">{formatNumber(businessListings)}</p>
          <p className="text-gray-400 text-sm text-center lg:text-lg">Business Listings</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl lg:text-4xl  font-bold text-primary">{formatNumber(verifiedUsers)}+</p>
          <p className="text-gray-400 text-sm lg:text-lg">Verified Users</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl lg:text-4xl font-bold text-primary">{formatNumber(newUsersPerMonth)}+</p>
          <p className="text-gray-400 text-center text-sm lg:text-lg">New Users per Month</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl lg:text-4xl  font-bold text-primary">{formatNumber(visitorsPerMonth)}+</p>
          <p className="text-gray-400 text-sm lg:text-lg">Visitors per Month</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
