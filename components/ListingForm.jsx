'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from './ui/input';
import { Button } from './ui/button';

const ListingSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  contact: Yup.string().required('Required'),
  businessEmail: Yup.string().email('Invalid email').required('Required'),
  businessPhone: Yup.string().required('Required'),
  typeOfVehicle: Yup.string().required('Required'),
  yearsInBusiness: Yup.number().required('Required'),
  operationArea: Yup.string().required('Required'),
  mileRadius: Yup.number().required('Required'),
  insurance: Yup.string().required('Required'),
  license: Yup.string().required('Required'),
  goodsInTransit: Yup.string().required('Required'),
  publicLiability: Yup.string().required('Required'),
});

export default function ListingForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      contact: '',
      businessEmail: '',
      businessPhone: '',
      typeOfVehicle: '',
      yearsInBusiness: '',
      operationArea: '',
      mileRadius: '',
      insurance: '',
      license: '',
      goodsInTransit: '',
      publicLiability: '',
    },
    validationSchema: ListingSchema,
    onSubmit: (values) => {
      console.log('Listing information:', values);
      // Proceed to the next step or handle the listing submission
    },
  });

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
                <label htmlFor='name'>Address</label>
                <input
                  name='address'
                  type='text'
                  placeholder='Address'
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.address && formik.errors.address}
                  className={
                    formik.touched.address && formik.errors.address
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.address && formik.errors.address && (
                  <p className='text-red-500 text-xs '>
                    {formik.errors.address}
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
            </div>
            <div className='flex flex-col space-y-5 w-full'>
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
              <div>
                <label htmlFor='license'>License</label>
                <input
                  name='license'
                  type='text'
                  placeholder='License'
                  value={formik.values.license}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.license && formik.errors.license}
                  className={
                    formik.touched.license && formik.errors.license
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.license && formik.errors.license && (
                  <p className='text-red-500 text-xs '>
                    {formik.errors.license}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor='goodsInTransit'>Goods in Transit</label>
                <input
                  name='goodsInTransit'
                  type='text'
                  placeholder='Goods in Transit'
                  value={formik.values.goodsInTransit}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.goodsInTransit &&
                    formik.errors.goodsInTransit
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.goodsInTransit &&
                  formik.errors.goodsInTransit && (
                    <p className='text-red-500 text-xs '>
                      {formik.errors.goodsInTransit}
                    </p>
                  )}
              </div>
              <div>
                <label htmlFor='publicLiability'>Public Liability</label>
                <input
                  name='publicLiability'
                  type='text'
                  placeholder='Public Liability'
                  value={formik.values.publicLiability}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={
                    formik.touched.publicLiability &&
                    formik.errors.publicLiability
                      ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                      : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  }
                />
                {formik.touched.publicLiability &&
                  formik.errors.publicLiability && (
                    <p className='text-red-500 text-xs '>
                      {formik.errors.publicLiability}
                    </p>
                  )}
              </div>
            </div>
          </div>

          <Button
            type='submit'
            className='btn btn-primary w-full uppercase font-bold'
          >
            Proceed
          </Button>
        </form>
      </div>
    </div>
  );
}
