import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { app } from '@/lib/firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2025-02-24.acacia' as const,
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
    const payload = await req.text();
    const sig = req.headers.get('stripe-signature') as string;

    let event;

    try {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret!);
    } catch (err: any) {
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const memberId = session.metadata?.memberId;

        if (memberId && memberId !== 'anon') {
            const db = getFirestore(app);
            await setDoc(doc(db, 'users', memberId), {
                memberStatus: 'Reserve',
                lastPurchaseAt: new Date().toISOString()
            }, { merge: true });

            await setDoc(doc(db, 'shipments', session.id), {
                memberId,
                status: 'New Shipment',
                createdAt: new Date().toISOString()
            });
        }
    }

    return NextResponse.json({ received: true });
}
