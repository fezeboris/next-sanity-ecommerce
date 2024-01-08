"use client";

import React, { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <USCProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl="https://next-sanity-ecommerce-plum.vercel.app/stripe/success"
        cancelUrl="https://next-sanity-ecommerce-plum.vercel.app/stripe/error"
        currency="USD"
        billingAddressCollection={false}
        shouldPersist={true}
        language="en-US"
      >
        {children}
      </USCProvider>
    </div>
  );
};

export default CartProvider;
