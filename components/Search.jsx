'use client';
import React, { useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { useRouter } from 'next/navigation';

const SearchComponent = ({ bgColor = 'bg-slate-300' }) => {
  const router = useRouter();

  const [searchData, setSearchData] = useState({
    driver: '',
    location: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter out empty search parameters
    const queryParams = Object.entries(searchData)
      .filter(([key, value]) => value && value.trim() !== '')
      .map(([key, value]) => `${key}=${encodeURIComponent(value.trim())}`)
      .join('&');

    // Redirect to the search page with the filtered query parameters
    router.push(`/listings?${queryParams}`);
  };

  return (
    <form
      className='flex flex-col lg:flex-row items-center justify-center lg:gap-1 gap-3'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='driver'
        placeholder='Search driver'
        className={`p-3 rounded w-48 ${bgColor}`}
        value={searchData.driver}
        onChange={handleChange}
      />
      <input
        type='text'
        name='location'
        placeholder='Enter Your Location '
        className={`p-3 rounded w-48 ${bgColor}`}
        value={searchData.location}
        onChange={handleChange}
      />
      <input
        type='text'
        name='category'
        placeholder='Select a category'
        className={`p-3 rounded w-48 ${bgColor}`}
        value={searchData.category}
        onChange={handleChange}
      />
      <button
        type='submit'
        className='bg-blue-800 text-white px-28 p-3 lg:p-3 rounded flex items-center gap-2'
      >
        <VscSearch className='text-xl' />
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
