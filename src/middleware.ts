import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (!request.cookies.has("__prepr_uid")) {
    request.cookies.set("__prepr_uid", crypto.randomUUID());
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}
