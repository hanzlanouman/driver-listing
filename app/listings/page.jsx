import Listings from '@/components/Listings';
const Page = async ({ searchParams }) => {
  const fetchDrivers = async (searchParams) => {
    console.log('BEFORE FETCH');
    const page = searchParams.page || 1;
    const pageSize = searchParams.pageSize || 10;
    const res = await fetch(
      `${process.env.STRAPI_LOCAL_URL}/api/listings?pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );
    const listings = await res.json();
    return listings;
  };

  const fetchSearchResults = async (searchParams) => {
    let apiUrl = `${process.env.STRAPI_LOCAL_URL}/api/listings`;
    const queryParts = [];

    if (searchParams.pickupDetails) {
      const pickupDetails = JSON.parse(searchParams.pickupDetails);

      // Add filters based on pickupDetails
      if (pickupDetails.vicinity) {
        queryParts.push(
          `filters[vicinity][$containsi]=${encodeURIComponent(
            pickupDetails.vicinity
          )}`
        );
      }
      if (pickupDetails.locality) {
        queryParts.push(
          `filters[locality][$containsi]=${encodeURIComponent(
            pickupDetails.locality
          )}`
        );
      }
      if (pickupDetails.city) {
        queryParts.push(
          `filters[city][$containsi]=${encodeURIComponent(pickupDetails.city)}`
        );
      }
      // Add more filters based on other details if needed
    }

    // Add pagination parameters
    const page = searchParams.page || 1;
    const pageSize = searchParams.pageSize || 10;
    queryParts.push(
      `pagination[page]=${page}`,
      `pagination[pageSize]=${pageSize}`
    );

    // Build the final API URL
    if (queryParts.length > 0) {
      apiUrl += `?${queryParts.join('&')}`;
    }

    const response = await fetch(apiUrl, {
      cache: 'no-cache',
    });
    const listings = await response.json();
    return listings;
  };

  let listings = [];
  if (searchParams) {
    listings = await fetchSearchResults(searchParams);
    console.log(listings);
  } else {
    listings = await fetchDrivers();
  }

  return (
    <div className=' '>
      <div className='bg-blue-400 p-4  shadow-lg mb-4 text-white text-center'>
        <h1 className='text-4xl font-b  old'>Available Drivers</h1>
        <p className='text-lg font-semibold'>
          {listings ? `Showing ${listings.length} results` : 'No results found'}
        </p>
      </div>

      <Listings
        listings={listings.data}
        pagination={listings.meta.pagination}
      />
    </div>
  );
};

export default Page;
