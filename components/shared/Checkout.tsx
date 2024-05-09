import React from "react";
import { IEvent } from "@/lib/mongodb/database/models/event.model";

import { loadStripe } from "@stripe/stripe-js";
import { checkoutOrder } from "@/lib/actions/order.actions";
import { Button } from "../ui/button";
import Image from "next/image";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price || "0",
      isFree: event.isFree || false,
      buyerId: userId,
    };
    await checkoutOrder(order);
  };

  return (
    <form action={onCheckout} method="post">
      <Button className="" type="submit">
        <div className="flex items-center">
          {/* <Image
            src="/assets/icons/stripe4.png"
            alt=""
            width={40}
            height={40}
          /> */}
          <p className="px-2 text-lg">Stripe</p>
        </div>
      </Button>
    </form>
  );
};

export default Checkout;
