import { NextRequest, NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { createOrder } from "@/lib/actions/order.actions";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export async function POST(request: NextRequest) {
  const body = await request
    .json()
    .then((data) => data as { data: { id: string } });

  const payment = await new Payment(client).get({ id: body.data.id });
  console.log(payment);
  const order = {
    stripeId: payment.id?.toString() || "", 
    eventId: payment?.metadata.event_id || "",
    buyerId: payment?.metadata.buyer_id || "",
    totalAmount: payment?.transaction_amount?.toString() || "0",
    createdAt: new Date(),
  };

  const newOrder = await createOrder(order);
  return NextResponse.json({ message: "OK", order: newOrder });
}
