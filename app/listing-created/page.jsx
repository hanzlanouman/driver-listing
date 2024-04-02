'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const ListingCreated = () => {
  // const router = useRouter();
  // const { session_id } = router.query;

  // useEffect(() => {
  //   if (session_id) {
  //     // Verify the payment and create the listing
  //     verifyPaymentAndCreateListing(session_id);
  //   }
  // }, [session_id]);

  // const verifyPaymentAndCreateListing = async (sessionId) => {
  //   try {
  //     const response = await fetch(
  //       `/api/verify-payment?session_id=${sessionId}`
  //     );
  //     const { success, listingId } = await response.json();
  //     if (success) {
  //       toast.success('Payment successful and listing created!');
  //       router.push(`/details/${listingId}`);
  //     } else {
  //       throw new Error(
  //         'Payment verification failed or listing creation failed.'
  //       );
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     toast.error('Error creating listing.');
  //     router.push('/'); // Redirect to home or an error page
  //   }
  // };

  return (
    <div>
      <h1>Listing Creation in Progress...</h1>
      {/* You can add a loading spinner or any other content here */}
    </div>
  );
};

export default ListingCreated;
