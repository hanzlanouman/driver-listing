'use client';
import React, { useState, useEffect, useRef } from 'react';

// Custom hook for counting animation
const useCounter = (start, end, duration = 2000, isVisible) => {
  const [count, setCount] = useState(start);
  const step = (end - start) / (duration / 10);

  useEffect(() => {
    let interval;
    if (isVisible) {
      let current = start;
      interval = setInterval(() => {
        current += step;
        setCount(Math.floor(current));
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        }
      }, 10);
    }

    return () => clearInterval(interval);
  }, [start, end, duration, step, isVisible]);

  return count;
};

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const businessListings = useCounter(0, 59000, 2000, isVisible);
  const verifiedUsers = useCounter(0, 23000, 2000, isVisible);
  const newUsersPerMonth = useCounter(0, 5000, 2000, isVisible);
  const visitorsPerMonth = useCounter(0, 42000, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when at least 50% of the element is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  const formatNumber = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + 'K' : num.toString();
  };

  return (
    <div ref={ref} className="container mx-auto py-16 text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold text-primary">{formatNumber(businessListings)}</p>
          <p className="text-gray-400">Business Listings</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold text-primary">{formatNumber(verifiedUsers)}+</p>
          <p className="text-gray-400">Verified Users</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold text-primary">{formatNumber(newUsersPerMonth)}+</p>
          <p className="text-gray-400">New Users per Month</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold text-primary">{formatNumber(visitorsPerMonth)}+</p>
          <p className="text-gray-400">Visitors per Month</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
