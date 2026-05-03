import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const password = process.env.SITE_PASSWORD
  if (!password) return NextResponse.next()

  const auth = request.cookies.get('site-auth')
  if (auth?.value === password) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = '/locked'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!locked|_next/static|_next/image|favicon\\.ico).*)'],
}
