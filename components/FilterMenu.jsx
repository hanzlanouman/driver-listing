import { Range } from 'react-range';
import React, { useState } from 'react';
import { RiStarFill } from 'react-icons/ri';

const FilterMenu = ({ onFiltersChange }) => {
  const [ratings, setRatings] = useState([]);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [price, setPrice] = useState([0, 1000]);

  const handleRatingChange = (rating) => {
    const newRatings = ratings.includes(rating)
      ? ratings.filter((r) => r !== rating)
      : [...ratings, rating];
    setRatings(newRatings);
    onFiltersChange({ ratings: newRatings, gender, age, price });
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    onFiltersChange({ ratings, gender: event.target.value, age, price });
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
    onFiltersChange({ ratings, gender, age: event.target.value, price });
  };

  const handlePriceChange = (values) => {
    setPrice(values);
    onFiltersChange({ ratings, gender, age, price: values });
  };

  // A helper function to render stars for the ratings filter
  const renderStars = (count) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={index < count ? 'text-orange-400' : 'text-gray-300'}
      >
        <RiStarFill />
      </span>
    ));
  };

  return (
    <div className='bg-white p-6 w-full rounded-lg shadow-lg'>
      <h3 className='font-semibold mb-4'>Filter Your Results</h3>

      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search doctor, condition & proceed'
          className='mb-3 w-full p-2 border rounded-md'
        />
        <input
          type='text'
          placeholder='Address, city, zip'
          className='w-full p-2 border rounded-md'
        />
      </div>

      {/* Patient Satisfaction */}
      <div className='my-6'>
        <h4 className='font-semibold mb-3'>Patient Satisfaction</h4>
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className='flex items-center mb-1'>
            <input
              type='checkbox'
              id={`rating-${rating}`}
              checked={ratings.includes(rating)}
              onChange={() => handleRatingChange(rating)}
              className='w-4 h-4'
            />
            <label
              htmlFor={`rating-${rating}`}
              className='ml-2 flex items-center text-sm cursor-pointer'
            >
              {renderStars(rating)} <span className='ml-1'>and up</span>
            </label>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div className='my-6'>
        <h4 className='font-semibold mb-3'>Gender</h4>
        <div className='flex flex-col'>
          <label className='inline-flex items-center mb-2'>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={gender === 'male'}
              onChange={handleGenderChange}
              className='w-4 h-4'
            />
            <span className='ml-2'>Male</span>
          </label>
          <label className='inline-flex items-center mb-2'>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={gender === 'female'}
              onChange={handleGenderChange}
              className='w-4 h-4'
            />
            <span className='ml-2'>Female</span>
          </label>
        </div>
      </div>

      {/* Age */}
      <div className='my-6'>
        <h4 className='font-semibold mb-3'>Age</h4>
        {[
          '30 And Younger',
          '31 To 40',
          '41 To 50',
          '51 To 60',
          '61 To 70',
          '71 And Older',
        ].map((ageRange) => (
          <label key={ageRange} className='block mb-2'>
            <input
              type='radio'
              name='age'
              value={ageRange}
              checked={age === ageRange}
              onChange={handleAgeChange}
              className='w-4 h-4'
            />
            <span className='ml-2'>{ageRange}</span>
          </label>
        ))}
      </div>

      {/* Consultation Fee */}
      <div className='my-6'>
        <h4 className='font-semibold mb-3'>Consultation Fee</h4>
        <Range
          step={1}
          min={0}
          max={1000}
          values={price}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                width: '100%',
                backgroundColor: '#ccc',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '24px',
                width: '24px',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA',
              }}
            >
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  backgroundColor: isDragged ? '#548BF4' : '#CCC',
                }}
              />
            </div>
          )}
        />

        <div className='text-sm mt-2'>
          ${price[0]} - ${price[1]}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
