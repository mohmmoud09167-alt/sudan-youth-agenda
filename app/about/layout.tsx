import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'عن المنصة | الأجندة الشبابية السودانية',
  description: 'كيف تجمع منصة الأجندة الشبابية السودانية أصوات الشباب وتحولها إلى أدلة وأولويات وتوصيات ومناصرة قابلة للتتبع.',
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
