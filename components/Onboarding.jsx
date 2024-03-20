// onboarding.jsx
'use client';
import { useState } from 'react';
import SignupForm from './SignupForm';
import ListingForm from './ListingForm';
import { useAuth } from './AuthContext';

const Onboarding = () => {
  const { login } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [signUpData, setSignUpData] = useState({});
  const [listingData, setListingData] = useState({});

  const handleSignupSubmit = async (signupData) => {
    setFormData({ ...formData, ...signupData });
    setSignUpData(signupData);

    setCurrentStep(2); // Move to the listing form step
  };

  const handleListingSubmit = async (listingData) => {
    setListingData(listingData);
    const res = await registerUser(signUpData);
    console.log(res.user.id);
    console.log('LISTING DATA', listingData);
    console.log(res);
    if (res) {
      try {
        const response = await fetch('http://localhost:1337/api/listings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${res.jwt}`, // Use the JWT token for authorization
          },
          body: JSON.stringify({
            data: {
              ...listingData,
              user: {
                data: {
                  id: res.user.id,
                },
              }, // Include the user ID
            },
          }),
        });

        if (!response.ok) {
          throw new Error('Listing creation failed');
        }

        const data = await response.json();
        console.log('Listing created:', data);
        // Proceed with further steps or redirect the user
      } catch (error) {
        console.error('Listing submission error:', error);
      }
    }

    // Proceed with further processing or submission of completeFormData
  };

  const registerUser = async (userData) => {
    const STRAPI_BASE_URL = 'http://localhost:1337';
    const response = await fetch(`${STRAPI_BASE_URL}/api/auth/local/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userData.username,
        email: userData.email,
        password: userData.password,
      }),
    });
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
    </div>
  );
};

export default Onboarding;
