'use client';

import './index.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>
        <main className="pb-20">{children}</main>
      </body>
    </html>
  );
}
