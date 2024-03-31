'use client';
import React, { useRef, useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';
import { useRouter } from 'next/navigation';

const libraries = ['places'];

const SearchComponent = ({ bgColor = 'bg-slate-300' }) => {
  const router = useRouter();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDOodgDRVDnOGrmzq-6l2ybUFwy7Ws3phA',
    libraries,
  });

  const pickupRef = useRef(null);
  const destinationRef = useRef(null);
  const [pickupDetails, setPickupDetails] = useState({});
  const [destinationDetails, setDestinationDetails] = useState({});

  const handlePlaceChanged = (ref, setDetails) => {
    const place = ref.current.getPlace();

    // Initialize an object to hold the postal code
    let postalCode = '';

    // Loop through address_components to find the postal_code
    place.address_components?.forEach((component) => {
      if (component.types.includes('postal_code')) {
        postalCode = component.long_name; // or component.short_name, depending on your need
      }
    });

    // Extracting all possible details including the postal code
    const details = {
      formattedAddress: place.formatted_address,
      placeId: place.place_id,
      types: place.types,
      url: place.url,
      vicinity: place.vicinity,
      coordinates: place.geometry?.location.toJSON(),
      addressComponents: place.address_components?.reduce(
        (acc, component) => ({
          ...acc,
          [component.types[0]]: {
            long_name: component.long_name,
            short_name: component.short_name,
          },
        }),
        {}
      ),
      additionalDetails: {
        phoneNumber: place.formatted_phone_number,
        internationalPhoneNumber: place.international_phone_number,
        website: place.website,
        rating: place.rating,
        userRatingsTotal: place.user_ratings_total,
        reviews: place.reviews,
        openingHours: place.opening_hours?.weekday_text,
      },
      postalCode: postalCode, // Including the postal code in the details object
    };

    setDetails(details);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pickupDetails, destinationDetails);
    const pickupDetailsEncoded = encodeURIComponent(
      JSON.stringify(pickupDetails)
    );
    console.log(pickupDetailsEncoded);
    router.push(`/listings?pickupDetails=${pickupDetailsEncoded}`);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col lg:flex-row items-center justify-center lg:gap-1 gap-3'
    >
      <Autocomplete
        onLoad={(autocomplete) => (pickupRef.current = autocomplete)}
        onPlaceChanged={() => handlePlaceChanged(pickupRef, setPickupDetails)}
      >
        <input
          type='text'
          placeholder='Enter Pickup Location'
          className={`p-3 rounded w-48 ${bgColor}`}
        />
      </Autocomplete>
      <Autocomplete
        onLoad={(autocomplete) => (destinationRef.current = autocomplete)}
        onPlaceChanged={() =>
          handlePlaceChanged(destinationRef, setDestinationDetails)
        }
      >
        <input
          type='text'
          placeholder='Enter Destination'
          className={`p-3 rounded w-48 ${bgColor}`}
        />
      </Autocomplete>
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
