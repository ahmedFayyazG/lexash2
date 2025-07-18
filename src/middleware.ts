import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl;

    // Protect the /appointments route
    if (url.pathname.startsWith('/appointments')) {
        const authHeader = request.headers.get('authorization');

        if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
            return new NextResponse('Unauthorized', { status: 401 });
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/appointments/:path*'],
};
