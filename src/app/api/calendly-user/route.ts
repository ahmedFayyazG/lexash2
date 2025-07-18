// /src/app/api/calendly-user/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch('https://api.calendly.com/users/me', {
        headers: {
            Authorization: `Bearer ${process.env.CALENDLY_PERSONAL_TOKEN}`,
        },
    });

    const data = await response.json();
    return NextResponse.json(data);
}
