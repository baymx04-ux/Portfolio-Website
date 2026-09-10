import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'junaidkanwar04@gmail.com';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }
    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }
    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return NextResponse.json({ error: 'One or more fields exceed the length limit' }, { status: 400 });
    }
    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email.trim(),
      subject: `Portfolio inquiry from ${name.trim()}`,
      text: `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Transmission received' });
  } catch (err) {
    console.error('Failed to process contact form:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}