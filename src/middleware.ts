import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);

  console.log('User Agent:', userAgent);
  console.log('Is Mobile:', isMobile);

  const pathname = request.nextUrl.pathname;

  // Prevent redirect loop
  if (!isMobile && !pathname.startsWith('/redirectPage')) {
    console.log('Redirecting desktop user to /redirectPage...');
    return NextResponse.redirect(new URL('/redirectPage', request.url));
  }

  console.log('Allowing user to proceed...');
  return NextResponse.next();
}

// Limit middleware to specific paths (like homepage or everything except /redirectPage)
export const config = {
  matcher: ['/', '/about', '/products/:path*'], // Add more paths as needed
};
