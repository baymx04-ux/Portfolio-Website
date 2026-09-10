import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'secret04';
const AUTH_COOKIE_NAME = 'jk_portfolio_admin_auth';

function isSecureRequest(request: NextRequest): boolean {
  const forwardedProto = request.headers.get('x-forwarded-proto');
  return forwardedProto === 'https' || request.url.startsWith('https:');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    if (password === ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true, message: 'Authenticated successfully' });
      response.cookies.set(AUTH_COOKIE_NAME, 'authenticated_session_jk', {
        httpOnly: true,
        secure: isSecureRequest(request),
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });
      return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid administrative password' }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, message: 'Bad request' }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get(AUTH_COOKIE_NAME);
  const authenticated = cookie?.value === 'authenticated_session_jk';
  return NextResponse.json({ authenticated });
}

export async function DELETE(request: NextRequest) {
  const response = NextResponse.json({ success: true, message: 'Logged out' });
  response.cookies.set(AUTH_COOKIE_NAME, '', {
    httpOnly: true,
    secure: isSecureRequest(request),
    expires: new Date(0),
    path: '/',
  });
  return response;
}
