import { NextResponse } from "next/server";
import { createOrder } from "@/lib/actions/order.actions";

export async function POST(request: Request) {
  const body: unknown = await request.json();

  console.log("body", body);

  return NextResponse.json({ success: true });
}
