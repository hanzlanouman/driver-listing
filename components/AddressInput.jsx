'use client';
import React, { useRef, useState } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

const libraries = ['places'];

const AddressInput = ({ onAddressSelect, bgColor = 'bg-slate-300' }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDOodgDRVDnOGrmzq-6l2ybUFwy7Ws3phA',
    libraries,
  });

  const autocompleteRef = useRef(null);
  const [address, setAddress] = useState('');

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    setAddress(place.formatted_address);
    onAddressSelect(place);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Autocomplete
      onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
      onPlaceChanged={handlePlaceChanged}
    >
      <input
        type='text'
        placeholder='Enter address'
        className={`p-3 rounded w-full ${bgColor}`}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </Autocomplete>
  );
};

export default AddressInput;
