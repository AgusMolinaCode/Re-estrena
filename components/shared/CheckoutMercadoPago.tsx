import React from "react";
import { IEvent } from "@/lib/mongodb/database/models/event.model";
import { checkoutOrderMercadoPago } from "@/lib/actions/order.actions";

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
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };

    await checkoutOrderMercadoPago(order);
  };

  return (
    <form action={onCheckout} method="POST">
      <button type="submit">
        {event.isFree ? "Get Ticket MercadoPago" : "Buy Ticket MercadoPago"}
      </button>
    </form>
  );
};

export default CheckoutMercadoPago;
