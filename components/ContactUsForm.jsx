// 'use client'
// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { sendEmail } from '@/utils/send-email';
// import HeroDriver from './HeroDriver';

// const contactInfo = [
//   {
//     title: 'Address',
//     description: '87 Grand St Croton on Hudson New York, NY 10510',
//   },
//   {
//     title: 'Email',
//     description: 'support@aazztech.com',
//   },
//   {
//     title: 'Website',
//     description: 'https://wpwax.com/',
//   },
// ];

// function ContactUsForm() {

//   const apiEndpoint = '/api/email';

 


//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendEmail(formData);
//   };

  

//   return (
//     <div className='w-full' >
//       <div className='flex flex-col gap-4 max-w-full md:max-w-[40%]'>
//         <h1 className='text-2xl font-bold mb-4 md:text-3xl'>Contact Info</h1>
//         {contactInfo.map((info, index) => (
//           <Card key={index} className='w-full md:w-96 h-auto'>
//             <CardHeader>
//               <CardTitle>{info.title}</CardTitle>
//               <CardDescription>{info.description}</CardDescription>
//             </CardHeader>
//           </Card>
//         ))}
//       </div>

//       <div className='flex flex-col w-full md:max-w-[60%]'>
//         <h1 className='text-2xl font-bold mb- md:text-xl'>Need a Quick Ride? Book Now!</h1>
//         <form className='space-y-4' onSubmit={handleSubmit}>
//           <input
//             type='text'
//             name='name'
//             onChange={handleChange}
//             placeholder='Name*'
//             className='w-full h-12 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
//             required
//           />

//           <input
//             type='email'
//             name='email'
//             onChange={handleChange}
//             placeholder='Email*'
//             className='w-full h-12 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
//             required
//           />

//           <input
//             type='text'
//             name='subject'
//             onChange={handleChange}
//             placeholder='Subject*'
//             className='w-full h-12 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
//             required
//           />

//           <textarea
//             name='message'
//             onChange={handleChange}
//             placeholder='Message*'
//             className='w-full h-32 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
//             required
//           />

//           <button className='w-full p-3 text-white bg-primary rounded'>
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactUsForm;

'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { sendEmail } from '@/utils/send-email';

function ContactUsForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      sendEmail(values);
    },
  });

  return (
    <div className='w-full'>
      <div className='flex flex-col w-full md:max-w-[60%]'>
        {/* <h1 className='text-2xl font-bold mb- md:text-xl'>Need a Quick Ride? Book Now!</h1> */}
        <form className='space-y-3 xl:w-[500px] lg:w-[400px]' onSubmit={formik.handleSubmit}>
          <input
            type='text'
            name='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder='Name*'
            className='w-full h-12 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='text-red-500'>{formik.errors.name}</div>
          ) : null}

          <input
            type='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder='Email*'
            className='w-full h-12 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='text-red-500'>{formik.errors.email}</div>
          ) : null}

          <input
            type='text'
            name='subject'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            placeholder='Subject*'
            className='w-full h-12 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className='text-red-500'>{formik.errors.subject}</div>
          ) : null}

          <textarea
            name='message'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            placeholder='Message*'
            className='w-full h-32 px-4 py-2 text-sm border rounded placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
          />
          {formik.touched.message && formik.errors.message ? (
            <div className='text-red-500'>{formik.errors.message}</div>
          ) : null}

          <button type='submit' className='w-full p-3 text-white bg-primary rounded'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;
