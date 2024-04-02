// pages/api/create-checkout-session.js
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export const POST = async (req) => {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    console.log('Request body:', await req.text()); // Log the raw request body

    const data = req;
    console.log('Parsed data:', data); // Log the parsed JSON data

    const line_items = [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: 'Driver Listing Fee',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ];

    const params = {
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      success_url: `${req.headers.get(
        'origin'
      )}/signup?paymentSuccess=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/signup?paymentCanceled=true`,
    };

    const checkoutSession = await stripe.checkout.sessions.create(params);
    console.log('Checkout session:', checkoutSession);

    return new Response(JSON.stringify({ url: checkoutSession.url }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
