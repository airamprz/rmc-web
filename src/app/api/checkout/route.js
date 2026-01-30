import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { color, size, quantity = 1 } = await req.json();

    if (!color || !size) {
      return new Response(
        JSON.stringify({ error: "Faltan datos del producto" }),
        { status: 400 }
      );
    }

    // 🔒 Base URL segura (fallback incluido)
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://www.realmotioncartel.com";

    if (!baseUrl.startsWith("https://")) {
      throw new Error("NEXT_PUBLIC_SITE_URL inválida");
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity,
        },
      ],

      shipping_address_collection: {
        allowed_countries: ["ES"],
      },

      billing_address_collection: "required",

      success_url: `${baseUrl}/merch?success=1`,
      cancel_url: `${baseUrl}/merch?canceled=1`,

      metadata: {
        drop: "DROP 01",
        color,
        size,
      },
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Stripe checkout error:", err);

    return new Response(
      JSON.stringify({
        error: "No se pudo iniciar el pago",
      }),
      { status: 500 }
    );
  }
}
