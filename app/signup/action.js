'use server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

// Function to get Cloudinary configuration
export const getCloudConfig = async () => {
  return {
    name: process.env.CLOUD_NAME,
    key: process.env.CLOUD_API_KEY,
  };
};

// Function to generate Cloudinary signature for secure uploads
export const getCloudSignature = async () => {
  const secret = cloudinary.config().api_secret;
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
    },
    secret
  );

  return {
    signature,
    timestamp,
  };
};

// Function to upload a single image to Cloudinary

// Function to upload multiple images to Cloudinary
// export const uploadImages = async (images) => {
//   const uploadedImages = {};

//   for (const [key, image] of Object.entries(images)) {
//     const uploadResult = await uploadImage(image);
//     uploadedImages[key] = uploadResult.url;
//   }

//   return uploadedImages;
// };
