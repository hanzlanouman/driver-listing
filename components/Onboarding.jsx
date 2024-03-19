// onboarding.jsx
'use client';
import { useState } from 'react';
import SignupForm from './SignupForm';
import ListingForm from './ListingForm';

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleSignupSubmit = (signupData) => {
    setFormData({ ...formData, ...signupData });
    setCurrentStep(2); // Move to the listing form step
  };

  const handleListingSubmit = (listingData) => {
    const completeFormData = { ...formData, ...listingData };
    console.log('Complete form data:', completeFormData);
    // Proceed with further processing or submission of completeFormData
  };

  return (
    <div>
      {currentStep === 1 && <SignupForm submitForm={handleSignupSubmit} />}
      {currentStep === 2 && <ListingForm submitForm={handleListingSubmit} />}
    </div>
  );
};

export default Onboarding;
