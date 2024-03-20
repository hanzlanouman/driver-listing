// components/LoginForm.jsx
'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from './ui/button';
import { useAuth } from './AuthContext';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = ({ onLoginSuccess }) => {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    // Inside the onSubmit function in LoginForm.jsx
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:1337/api/auth/local', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            identifier: values.email,
            password: values.password,
          }),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();
        const { jwt, user } = data;
        // Store the token and user information (e.g., in local storage or context)
        localStorage.setItem('token', jwt);
        localStorage.setItem('user', JSON.stringify(user));
        // Call a callback function to handle successful login
        // onLoginSuccess(jwt, user);
        console.log(data);
        login(data.jwt, data.user);
      } catch (error) {
        // Handle login error (e.g., show an error message)
        console.error('Login error:', error.message);
      }
    },
  });

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-md p-8 flex flex-col gap-8'>
        <div>
          <h1 className='text-4xl font-bold text-center text-primary'>Login</h1>
        </div>
        <form onSubmit={formik.handleSubmit} className='space-y-5'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              name='email'
              type='email'
              placeholder='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.email && formik.errors.email
                  ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              }
            />
            {formik.touched.email && formik.errors.email && (
              <div className='text-red-500 text-xs'>{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.password && formik.errors.password
                  ? 'shadow-sm bg-gray-50 border border-red-600 text-red-600 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              }
            />
            {formik.touched.password && formik.errors.password && (
              <div className='text-red-500 text-xs'>
                {formik.errors.password}
              </div>
            )}
          </div>
          <Button type='submit' className='btn btn-primary w-full rounded'>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
