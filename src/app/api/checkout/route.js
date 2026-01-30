import Stripe from "stripe";

export const runtime = "nodejs";

// Inicializamos Stripe SOLO si existe la clave
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  try {
    const { color, size, quantity } = await req.json();

    if (!color || !size) {
      return new Response(
        JSON.stringify({ error: "Faltan datos del producto" }),
        { status: 400 }
      );
    }

    // URL base absoluta (OBLIGATORIA para Stripe)
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://www.realmotioncartel.com";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: quantity || 1,
        },
      ],

      // Dirección de envío (España)
      shipping_address_collection: {
        allowed_countries: ["ES"],
      },

      // Dirección de facturación obligatoria
      billing_address_collection: "required",

      // URLs ABSOLUTAS (esto soluciona el error)
      success_url: `${baseUrl}/merch?success=1`,
      cancel_url: `${baseUrl}/merch?canceled=1`,

      // Metadata del pedido (MUY IMPORTANTE)
      metadata: {
        brand: "Real Motion Cartel",
        drop: "DROP 01",
        product: "T-Shirt",
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
        error: "Error al iniciar el pago. Inténtalo de nuevo.",
      }),
      { status: 500 }
    );
  }
}
