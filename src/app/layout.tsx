'use client';
import { Metadata } from 'next';

import './index.css';

export const meta: Metadata = {
  title: '주님과 함께 걷는 길은',
  description:
    '제5회 새로핌 교회음악 페스티벌 연주회 초대장 - 주님과 함께 걷는 길은 ',
  openGraph: {
    title: '주님과 함께 걷는 길은',
    description: '제5회 새로핌 교회음악 페스티벌 연주회 초대장',
    url: 'https://concert-invitation.vercel.app/',
    siteName: '주님과 함께 걷는 길은',
    images: [
      {
        url: '/images/thumnail.jpg',
        width: 1200,
        height: 630,
        alt: '미리보기 이미지 설명',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

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
