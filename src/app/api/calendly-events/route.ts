import { NextResponse } from 'next/server';

export async function GET() {
    const userUri = 'https://api.calendly.com/users/1883c2df-997f-4829-82c9-7302a2b2f9e3';

    const response = await fetch(`https://api.calendly.com/scheduled_events?user=${encodeURIComponent(userUri)}`, {
        headers: {
            Authorization: `Bearer ${process.env.CALENDLY_PERSONAL_TOKEN}`,
        },
    });

    const data = await response.json();
    return NextResponse.json(data);
}
