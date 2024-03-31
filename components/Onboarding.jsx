// onboarding.jsx
'use client';
import { useState, useEffect } from 'react';
import SignupForm from './SignupForm';
import ListingForm from './ListingForm';
import DocumentInput from './DocumentInput';
import Payment from './Payment';
import { useAuth } from './AuthContext';
import { useRouter } from 'next/navigation';
import { fetch } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { uploadImage } from '@/utils/helper';

const Onboarding = () => {
  // const STRAPI_URL = 'https://light-flower-42a8173279.strapiapp.com';
  const STRAPI_URL = 'http://localhost:1337';
  const router = useRouter();
  const { login } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [signUpData, setSignUpData] = useState({});
  const [listingData, setListingData] = useState({});
  const [documentData, setDocumentData] = useState({});

  const searchParams = useSearchParams();
  const success = searchParams.get('success');
  const session_id = searchParams.get('session_id');

  const handleSignupSubmit = async (signupData) => {
    setSignUpData(signupData);
    setCurrentStep(2); // Move to the listing form step
  };

  const handleListingSubmit = async (listingData) => {
    setListingData(listingData);
    setCurrentStep(3); // Move to the document upload step
  };

  const handleDocumentSubmit = async (documents) => {
    try {
      // Upload documents to Cloudinary
      const uploadedDocuments = await Promise.all([
        uploadImage(documents.driverLicense),
        uploadImage(documents.goodsInTransit),
        uploadImage(documents.publicLiability),
      ]);

      // Store the URLs of the uploaded documents
      const documentUrls = {
        driverLicense: uploadedDocuments[0].url,
        goodsInTransit: uploadedDocuments[1].url,
        publicLiability: uploadedDocuments[2].url,
      };

      setDocumentData(documentUrls);
      setCurrentStep(4); // Move to the payment step
    } catch (error) {
      console.error('Error uploading documents:', error);
      toast.error(`Error: ${error}`);
    }
  };

  // Add a useEffect hook to handle payment success when the component mounts
  useEffect(() => {
    if (success === 'true' && session_id) {
      console.log('Payment successful');
      handlePaymentSuccess(session_id);
    }
  }, [success, session_id]);

  // Remove the payment verification step and directly proceed with listing creation
  const handlePaymentSuccess = async (sessionId) => {
    try {
      console.log('Payment successful');
      // Proceed to create the listing
      const userRes = await registerUser(signUpData);
      if (userRes.error) {
        throw new Error(userRes.error.message);
      }

      const listingResponse = await fetch(`${STRAPI_URL}/api/listings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userRes.jwt}`,
        },
        body: JSON.stringify({
          data: {
            ...listingData,
            ...documentData,
            user: userRes.user.id,
          },
        }),
      });

      if (!listingResponse.ok) {
        const error = await listingResponse.json();
        throw new Error(error.message || 'Failed to create listing');
      }

      const listing = await listingResponse.json();
      toast.success('Payment successful and listing created!');
      router.push(`/details/${listing.data.id}`);
    } catch (error) {
      console.error('Error:', error);
      toast.error(`Error: ${error.message}`);
      router.push('/signup?paymentFailed=true'); // Redirect to the signup page with an error indicator
    }
  };

  const registerUser = async (userData) => {
    const response = await fetch(`${STRAPI_URL}/api/auth/local/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userData.username,
        email: userData.email,
        password: userData.password,
      }),
      cache: 'no-cache',
    });

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
      {currentStep === 4 && <Payment onPaymentSuccess={handlePaymentSuccess} />}
    </div>
  );
};

export default Onboarding;
