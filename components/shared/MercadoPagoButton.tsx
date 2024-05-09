"use client";

import { IEvent } from "@/lib/mongodb/database/models/event.model";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React from "react";
import CheckoutMercadoPago from "./CheckoutMercadoPago";

const MercadoPagoButton = ({ event }: { event: IEvent }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  return (
    <div>
      <>
        <SignedOut>
          <p>Necesitas iniciar sesión para poder comprar este evento.</p>
        </SignedOut>

        <SignedIn>
          <CheckoutMercadoPago event={event} userId={userId} />
        </SignedIn>
      </>
    </div>
  );
};

export default MercadoPagoButton;
