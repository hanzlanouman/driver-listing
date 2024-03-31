// PaymentComponent.jsx
'use client';

import toast from 'react-hot-toast';

const Payment = ({ onPaymentSuccess }) => {
  const handlePayment = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
        // Add any additional data you might need for the payment session
      });

      const { url } = await response.json();
      window.location.href = url; // Redirect the user to Stripe Checkout
    } catch (error) {
      console.error('Error initiating payment:', error);
      toast.error('Error processing payment.');
    }
  };

  return (
    <button
      onClick={handlePayment}
      className='bg-blue-500 text-white p-3 rounded'
    >
      Proceed to Payment
    </button>
  );
};

export default Payment;
