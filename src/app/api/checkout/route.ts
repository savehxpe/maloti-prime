import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-02-24.acacia" as const,
});

export async function POST(req: Request) {
    try {
        const { items, memberId, success_url, cancel_url } = await req.json();

        // Map your items to Stripe line items
        const lineItems = items.map((item: any) => ({
            price_data: {
                currency: "zar",
                product_data: {
                    name: item.name,
                    images: item.image ? [item.image] : [],
                },
                unit_amount: Math.round(item.price * 100), // Rands to cents
            },
            quantity: 1, // Assuming 1 for simplicity based on MP-FIN-01 protocol
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: success_url || `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: cancel_url || `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/cancel`,
            metadata: {
                memberId: memberId || "anonymous",
            },
        });

        return NextResponse.json({ id: session.id, url: session.url });
    } catch (err: any) {
        console.error("Stripe Checkout Error:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
