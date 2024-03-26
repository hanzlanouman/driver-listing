import { useState } from 'react';

function DocumentInput({ submitForm }) {
  const [driverLicense, setDriverLicense] = useState(null);
  const [publicLiability, setPublicLiability] = useState(null);
  const [goodsInTransit, setGoodsInTransit] = useState(null);
  const [errors, setErrors] = useState({});

  const validateFiles = () => {
    const newErrors = {};
    if (!driverLicense)
      newErrors.driverLicense = 'Driver License Front is required';
    if (!publicLiability)
      newErrors.publicLiability = 'Driver License Back is required';
    if (!goodsInTransit)
      newErrors.goodsInTransit = 'goodsInTransit is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFiles()) {
      submitForm({ driverLicense, publicLiability, goodsInTransit });
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-md p-8 flex flex-col gap-8'>
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label
              htmlFor='driverLicense'
              className='block text-sm font-medium text-gray-700'
            >
              Driver&apos;s License
            </label>
            <input
              type='file'
              onChange={(e) => setDriverLicense(e.target.files[0])}
              className={`mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 ${
                errors.driverLicense ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.driverLicense && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.driverLicense}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='publicLiability'
              className='block text-sm font-medium text-gray-700'
            >
              Public Liability Insurance
            </label>
            <input
              type='file'
              onChange={(e) => setPublicLiability(e.target.files[0])}
              className={`mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 ${
                errors.publicLiability ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.publicLiability && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.publicLiability}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='goodsInTransit'
              className='block text-sm font-medium text-gray-700'
            >
              Goods in Transit
            </label>
            <input
              type='file'
              onChange={(e) => setGoodsInTransit(e.target.files[0])}
              className={`mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 ${
                errors.goodsInTransit ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.goodsInTransit && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.goodsInTransit}
              </p>
            )}
          </div>

          <button
            type='submit'
            className='mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
          >
            Submit Documents
          </button>
        </form>
      </div>
    </div>
  );
}

export default DocumentInput;
