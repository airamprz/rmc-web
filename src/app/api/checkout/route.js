import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { color, size, quantity } = await req.json();

    if (!color || !size) {
      return new Response(
        JSON.stringify({ error: "Faltan datos del producto" }),
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: quantity || 1,
        },
      ],

      shipping_address_collection: {
        allowed_countries: ["ES"],
      },

      billing_address_collection: "required",

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/merch?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/merch?canceled=1`,

      metadata: {
        drop: "DROP 01",
        color,
        size,
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}
