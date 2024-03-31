'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from './ui/button';
import AddressInput from './AddressInput';

const ListingSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  vicinity: Yup.string().required('Required'),
  locality: Yup.string().required('Required'),
  city: Yup.string().required('Required'),

  // postalCode: Yup.string().required('Required'),
  contact: Yup.string().required('Required'),
  businessEmail: Yup.string().email('Invalid email').required('Required'),
  businessPhone: Yup.string().required('Required'),
  typeOfVehicle: Yup.string().required('Required'),
  yearsInBusiness: Yup.number().required('Required'),
  mileRadius: Yup.number().required('Required'),
  insurance: Yup.string().required('Required'),
});

export default function ListingForm({ submitForm, back }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      vicinity: '',
      locality: '',
      city: '',
      postalCode: '',
      contact: '',
      businessEmail: '',
      businessPhone: '',
      typeOfVehicle: '',
      yearsInBusiness: '',
      mileRadius: '',
      insurance: '',
    },
    validationSchema: ListingSchema,
    onSubmit: (values) => {
      console.log('Listing information:', values);
      submitForm(values);
    },
  });

  const handleAddressSelect = (place) => {
    console.log(place);
    const locality = place.address_components.find((component) =>
      component.types.includes('administrative_area_level_3')
    );
    const city = place.address_components.find((component) =>
      component.types.includes('administrative_area_level_2')
    );
    formik.setFieldValue('vicinity', place.vicinity);
    formik.setFieldValue('locality', locality ? locality.long_name : '');
    formik.setFieldValue('city', city ? city.long_name : '');
    formik.setFieldValue(
      'postalCode',
      place.address_components.find((component) =>
        component.types.includes('postal_code')
      )?.long_name || ''
    );
  };

  // You can also set other fields based on the selected place
  // For example: formik.setFieldValue('coordinates', place.geometry.location.toJSON());

  return (
    <div className='flex items-center justify-center  my-20 xl:flex-row flex-col'>
      <div className='max-w-2xl w-full bg-white rounded-lg shadow-md p-8 flex flex-col gap-8'>
        <div>
          <h1 className='text-3xl font-bold text-center text-primary'>
            Create Your Listing
          </h1>
        </div>
        <form onSubmit={formik.handleSubmit} className='space-y-4 '>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              name='name'
              type='text'
              placeholder='Name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && formik.errors.name}
              className={
                formik.touched.name && formik.errors.name
                  ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              }
            />
            {formik.touched.name && formik.errors.name && (
              <p className='text-red-500 text-xs '>{formik.errors.name}</p>
            )}
          </div>
          <div className='flex gap-x-5 w-full xl:flex-row flex-col'>
            <div className='flex flex-col space-y-5 w-full'>
              <div>
                <label htmlFor='addressDetails'>Address</label>
                <AddressInput onAddressSelect={handleAddressSelect} />
              </div>
              <div>
                <label htmlFor='name'>Zip Code</label>
                <input
                  name='zipCode'
                  type='text'
                  placeholder='Zip Code'
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.zipCode && formik.errors.zipCode}
                  className={
                    formik.touched.zipCode && formik.errors.zipCode
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.zipCode && formik.errors.zipCode && (
                  <p className='text-red-500 text-xs '>
                    {formik.errors.zipCode}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor='name'>Contact</label>
                <input
                  name='contact'
                  type='text'
                  placeholder='Contact'
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.contact && formik.errors.contact}
                  className={
                    formik.touched.contact && formik.errors.contact
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.contact && formik.errors.contact && (
                  <p className='text-red-500 text-xs '>
                    {formik.errors.contact}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor='name'>Business Email</label>
                <input
                  name='businessEmail'
                  type='text'
                  placeholder='Business Email'
                  value={formik.values.businessEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.businessEmail && formik.errors.businessEmail
                  }
                  className={
                    formik.touched.businessEmail && formik.errors.businessEmail
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.businessEmail &&
                  formik.errors.businessEmail && (
                    <p className='text-red-500 text-xs '>
                      {formik.errors.businessEmail}
                    </p>
                  )}
              </div>
              <div>
                <label htmlFor='name'>Business Phone</label>
                <input
                  name='businessPhone'
                  type='text'
                  placeholder='Business Phone'
                  value={formik.values.businessPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.businessPhone && formik.errors.businessPhone
                  }
                  className={
                    formik.touched.businessPhone && formik.errors.businessPhone
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.businessPhone &&
                  formik.errors.businessPhone && (
                    <p className='text-red-500 text-xs '>
                      {formik.errors.businessPhone}
                    </p>
                  )}
              </div>
              <div>
                <label htmlFor='name'>Type of Vehicle</label>
                <input
                  name='typeOfVehicle'
                  type='text'
                  placeholder='Type of Vehicle'
                  value={formik.values.typeOfVehicle}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.typeOfVehicle && formik.errors.typeOfVehicle
                  }
                  className={
                    formik.touched.typeOfVehicle && formik.errors.typeOfVehicle
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.typeOfVehicle &&
                  formik.errors.typeOfVehicle && (
                    <p className='text-red-500 text-xs '>
                      {formik.errors.typeOfVehicle}
                    </p>
                  )}
              </div>
            </div>
            <div className='flex flex-col space-y-5 w-full'>
              <div>
                <label htmlFor='name'>Years In Business</label>
                <input
                  name='yearsInBusiness'
                  type='text'
                  placeholder='Years In Business'
                  value={formik.values.yearsInBusiness}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.yearsInBusiness &&
                    formik.errors.yearsInBusiness
                  }
                  className={
                    formik.touched.yearsInBusiness &&
                    formik.errors.yearsInBusiness
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.yearsInBusiness &&
                  formik.errors.yearsInBusiness && (
                    <p className='text-red-500 text-xs '>
                      {formik.errors.yearsInBusiness}
                    </p>
                  )}
              </div>
              <div>
                <label htmlFor='name'>Operation Area</label>
                <input
                  name='operationArea'
                  type='text'
                  placeholder='Operation Area'
                  value={formik.values.operationArea}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.operationArea && formik.errors.operationArea
                  }
                  className={
                    formik.touched.operationArea && formik.errors.operationArea
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.operationArea &&
                  formik.errors.operationArea && (
                    <p className='text-red-500 text-xs '>
                      {formik.errors.operationArea}
                    </p>
                  )}
              </div>
              <div>
                <label htmlFor='mileRadius'>Mile Radius</label>
                <input
                  name='mileRadius'
                  type='text'
                  placeholder='Mile Radius'
                  value={formik.values.mileRadius}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.mileRadius && formik.errors.mileRadius}
                  className={
                    formik.touched.mileRadius && formik.errors.mileRadius
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.mileRadius && formik.errors.mileRadius && (
                  <p className='text-red-500 text-xs '>
                    {formik.errors.mileRadius}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor='insurance'>Insurance</label>
                <input
                  name='insurance'
                  type='text'
                  placeholder='Insurance'
                  value={formik.values.insurance}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.insurance && formik.errors.insurance}
                  className={
                    formik.touched.insurance && formik.errors.insurance
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.insurance && formik.errors.insurance && (
                  <p className='text-red-500 text-xs '>
                    {formik.errors.insurance}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className='flex gap-8'>
            <Button
              onClick={back}
              className='btn btn-secondary w-full uppercase font-bold'
            >
              Back
            </Button>
            <Button
              type='submit'
              className='btn btn-primary w-full uppercase font-bold'
            >
              Proceed
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
