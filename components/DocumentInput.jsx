import { useState } from 'react';

function DocumentInput({ submitForm }) {
  const [driverLicenseFront, setDriverLicenseFront] = useState(null);
  const [driverLicenseBack, setDriverLicenseBack] = useState(null);
  const [permit, setPermit] = useState(null);
  const [errors, setErrors] = useState({});

  const validateFiles = () => {
    const newErrors = {};
    if (!driverLicenseFront)
      newErrors.driverLicenseFront = 'Driver License Front is required';
    if (!driverLicenseBack)
      newErrors.driverLicenseBack = 'Driver License Back is required';
    if (!permit) newErrors.permit = 'Permit is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFiles()) {
      submitForm({ driverLicenseFront, driverLicenseBack, permit });
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-md p-8 flex flex-col gap-8'>
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label
              htmlFor='driverLicenseFront'
              className='block text-sm font-medium text-gray-700'
            >
              Driver License Front
            </label>
            <input
              type='file'
              onChange={(e) => setDriverLicenseFront(e.target.files[0])}
              className={`mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 ${
                errors.driverLicenseFront ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.driverLicenseFront && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.driverLicenseFront}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='driverLicenseBack'
              className='block text-sm font-medium text-gray-700'
            >
              Driver License Back
            </label>
            <input
              type='file'
              onChange={(e) => setDriverLicenseBack(e.target.files[0])}
              className={`mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 ${
                errors.driverLicenseBack ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.driverLicenseBack && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.driverLicenseBack}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor='permit'
              className='block text-sm font-medium text-gray-700'
            >
              Permit
            </label>
            <input
              type='file'
              onChange={(e) => setPermit(e.target.files[0])}
              className={`mt-1 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 ${
                errors.permit ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.permit && (
              <p className='text-red-500 text-xs mt-1'>{errors.permit}</p>
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
