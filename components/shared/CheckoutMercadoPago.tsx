import React from "react";
import { IEvent } from "@/lib/mongodb/database/models/event.model";
import { checkoutOrderMercadoPago } from "@/lib/actions/order.actions";
import { Button } from "../ui/button";
import Image from "next/image";

const CheckoutMercadoPago = ({
  event,
  userId,
}: {
  event: IEvent;
  userId: string;
}) => {
  React.useEffect(() => {
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

    await checkoutOrderMercadoPago(order);
  };

  return (
    <form action={onCheckout}>
      <Button type="submit">
        <>
          <Image
            src="/assets/icons/mercado-pago.svg"
            alt=""
            width={40}
            height={40}
          />

          <p className="px-2 text-lg">MercadoPago</p>
        </>
      </Button>
      {/* <button type="submit">
        {event.isFree ? "Get Ticket MercadoPago" : "Buy Ticket MercadoPago"}
      </button> */}
    </form>
  );
};

export default CheckoutMercadoPago;
