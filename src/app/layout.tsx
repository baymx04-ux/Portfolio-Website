import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Junaid Kanwar — Full-Stack Developer',
  description:
    'Personal engineering portfolio of Junaid Kanwar (Kanwar Junaid Islam), a Full-Stack Developer specializing in resilient web applications, modern React interfaces, REST APIs, and microservices.',
  keywords: [
    'Junaid Kanwar',
    'Kanwar Junaid Islam',
    'Full Stack Developer',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Kanwar Junaid Islam', url: 'https://junaidkanwar.netlify.app/' }],
  creator: 'Kanwar Junaid Islam',
  metadataBase: new URL('https://junaidkanwar.netlify.app/'),
  openGraph: {
    title: 'Junaid Kanwar — Full-Stack Developer',
    description:
      'Full-Stack Developer building resilient web applications, modern React interfaces, REST APIs, and containerized microservices.',
    url: 'https://junaidkanwar.netlify.app/',
    siteName: 'Junaid Kanwar Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Junaid Kanwar — Full-Stack Developer',
    description:
      'Full-Stack Developer building resilient web applications, modern React interfaces, REST APIs, and containerized microservices.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-ink antialiased selection:bg-pine selection:text-white">
        {children}
      </body>
    </html>
  );
}
