'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from './ui/input';
import { Button } from './ui/button';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export default function SignupForm({ submitForm }) {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      submitForm(values);

      // Proceed to the next step or handle the signup logic
    },
  });

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-md p-8 flex flex-col gap-8'>
        <div>
          <h1 className='text-4xl font-bold text-center text-primary'>
            Sign Up
          </h1>
        </div>
        <form onSubmit={formik.handleSubmit} className='space-y-5'>
          <div>
            <label htmlFor='name'>Username</label>
            <input
              name='username'
              type='text'
              placeholder='Username'
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && formik.errors.username}
              className={
                formik.touched.username && formik.errors.username
                  ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              }
            />
            {formik.touched.username && formik.errors.username && (
              <p className='text-red-500 text-xs '>{formik.errors.username}</p>
            )}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='email'
              placeholder='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
              className={
                formik.touched.email && formik.errors.email
                  ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              }
            />
            {formik.touched.email && formik.errors.email && (
              <div className='text-red-500 text-xs mt-1'>
                {formik.errors.email}
              </div>
            )}
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
              className={
                formik.touched.password && formik.errors.password
                  ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              }
            />
            {formik.touched.password && formik.errors.password && (
              <div className='text-red-500 text-xs mt-1'>
                {formik.errors.password}
              </div>
            )}
          </div>
          <div>
            <label htmlFor='confirmPassowrd'>Confirm Password</label>
            <input
              name='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              }
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className='text-red-500 text-xs mt-1'>
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>
          <Button type='submit' className='btn btn-primary w-full rounded'>
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
