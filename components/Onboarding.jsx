// onboarding.jsx
'use client';
import { useState } from 'react';
import SignupForm from './SignupForm';
import ListingForm from './ListingForm';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import DocumentInput from './DocumentInput';
import { uploadImage } from '@/utils/helper';

const Onboarding = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [signUpData, setSignUpData] = useState({});
  const [listingData, setListingData] = useState({});

  const [documentData, setDocumentData] = useState({});

  const handleDocumentSubmit = async (documents) => {
    try {
      // Upload documents to Cloudinary
      const uploadedDocuments = await Promise.all([
        uploadImage(documents.driverLicense),
        uploadImage(documents.goodsInTransit),
        uploadImage(documents.publicLiability),
      ]);

      console.log(uploadedDocuments);
      // Store the URLs of the uploaded documents
      const documentUrls = {
        driverLicense: uploadedDocuments[0].url,
        goodsInTransit: uploadedDocuments[1].url,
        publicLiability: uploadedDocuments[2].url,
      };

      // Create the listing with the uploaded document URLs
      const userRes = await registerUser(signUpData);
      if (userRes.error) {
        console.log('User registration failed:', userRes.error.message);
        toast.error(`${userRes.error.message}`);
        return;
      }

      const listingResponse = await fetch(
        `https://light-flower-42a8173279.strapiapp.com/api/listings`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userRes.jwt}`, // Assuming the JWT token is needed for authorization
          },
          body: JSON.stringify({
            data: {
              ...listingData,
              ...documentUrls,
              user: userRes.user.id, // Directly link the listing to the user using the user's ID
            },
          }),
        }
      );

      if (listingResponse.error) {
        toast.error('Failed to create listing');
        throw new Error(error.message || 'Failed to create listing');
      }

      const listing = await listingResponse.json();
      toast.success('User registered and listing created successfully!');
      console.log('Listing created:', listing);

      // Redirect to the newly created listing page
      router.push(`/details/${listing.data.id}`);
    } catch (error) {
      console.error('Error creating listing:', error);
      toast.error(`Error: ${error}`);
    }
  };

  const handleSignupSubmit = async (signupData) => {
    setFormData({ ...formData, ...signupData });
    setSignUpData(signupData);

    setCurrentStep(2); // Move to the listing form step
  };

  const handleListingSubmit = async (listingData) => {
    // Register the user first
    setListingData(listingData);
    setCurrentStep(3); // Move to the document upload step
  };

  const registerUser = async (userData) => {
    console.log(
      'URLL',
      `https://light-flower-42a8173279.strapiapp.com/api/auth/local/register`
    );
    const response = await fetch(
      `https://light-flower-42a8173279.strapiapp.com/api/auth/local/register`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password,
        }),
        cache: 'no-cache',
      }
    );
    console.log(response);
    const data = await response.json();
    return data;
  };

  return (
    <div>
      {currentStep === 1 && <SignupForm submitForm={handleSignupSubmit} />}
      {currentStep === 2 && (
        <ListingForm
          submitForm={handleListingSubmit}
          back={() => setCurrentStep(1)}
        />
      )}
      {currentStep === 3 && <DocumentInput submitForm={handleDocumentSubmit} />}
    </div>
  );
};

export default Onboarding;
