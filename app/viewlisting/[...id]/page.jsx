import { redirect } from 'next/navigation';
import React from 'react';
const fetchListingByUserId = async (userId) => {
  const res = await fetch(
    `${process.env.STRAPI_CLOUD_URL}/api/listings?filters[user][id][$eq]=${userId}&populate=user`
  );
  const data = await res.json();
  return data.data.length > 0 ? data.data[0] : null;
};

const page = async ({ params }) => {
  const { id } = params;
  const listing = await fetchListingByUserId(id[0]);
  if (!listing) {
    // Redirect to the 404 page if the listing is not found
    redirect('/404');
  }
  return <div>page</div>;
};

export default page;
