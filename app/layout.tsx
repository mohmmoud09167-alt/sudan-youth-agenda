import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'منصة الأجندة الشبابية السودانية',
  description: 'منصة وطنية حيّة تجمع رؤى الشباب السوداني وتحولها إلى أولويات موثقة ومناصرة يمكن تتبعها.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
