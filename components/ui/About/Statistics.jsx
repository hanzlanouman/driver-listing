import React from 'react';

const StatisticsSection = () => {
  return (
    <div className="container mx-auto py-16 text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold text-primary">59k</p>
          <p className="text-gray-400">Business Listings</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold text-primary">23k+</p>
          <p className="text-gray-400">Verified Users</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold text-primary">5k+</p>
          <p className="text-gray-400">New Users per Month</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold text-primary">42k+</p>
          <p className="text-gray-400">Visitors per Month</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
