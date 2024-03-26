import Listings from '@/components/Listings';
const Page = async ({ searchParams }) => {
  const fetchDrivers = async (searchParams) => {
    const page = searchParams.page || 1;
    const pageSize = searchParams.pageSize || 10;
    const res = await fetch(
      `${process.env.STRAPI_CLOUD_URL}/api/listings?pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );
    const listings = await res.json();
    return listings;
  };

  const fetchSearchResults = async (searchParams) => {
    // Base URL for the API endpoint
    let apiUrl = `${process.env.STRAPI_CLOUD_URL}/api/listings`;

    // Initialize an array to hold query parts
    const queryParts = [];

    // Dynamically add search parameters if they are provided
    if (searchParams.driver) {
      queryParts.push(
        `filters[name][$containsi]=${encodeURIComponent(searchParams.driver)}`
      );
    }
    if (searchParams.location) {
      queryParts.push(
        `filters[operationArea][$containsi]=${encodeURIComponent(
          searchParams.location
        )}`
      );
    }
    if (searchParams.category) {
      queryParts.push(
        `filters[vehicle][$containsi]=${encodeURIComponent(
          searchParams.category
        )}`
      );
    }

    // Concatenate all query parts with '&' and append to the base URL if any exist
    const page = searchParams.page || 1;
    const pageSize = searchParams.pageSize || 10;
    queryParts.push(
      `pagination[page]=${page}`,
      `pagination[pageSize]=${pageSize}`
    );

    if (queryParts.length > 0) {
      apiUrl += `?${queryParts.join('&')}`;
    }

    const response = await fetch(apiUrl);
    const listings = await response.json();
    return listings;
  };

  let listings = [];
  // Assuming searchParams is an object with keys for driver, location, and category
  if (searchParams) {
    listings = await fetchSearchResults(searchParams);
  } else {
    listings = await fetchDrivers();
  }

  return (
    <div className=' '>
      <div className='bg-blue-400 p-4  shadow-lg mb-4 text-white text-center'>
        <h1 className='text-4xl font-bold'>Available Drivers</h1>
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
