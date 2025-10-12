import type { Metadata } from 'next';
import './global.css';
import ImagePreloader from './components/ImagePreloader';
import { Analytics } from '@vercel/analytics/next';
import KakaoScript from './components/KakaoScript';

export const metadata: Metadata = {
  metadataBase: new URL('https://concert-invitation.vercel.app/'),
  title: '주님과 함께 걷는 길은',
  description: '제5회 새로핌 교회음악 페스티벌 연주회 초대장',
  openGraph: {
    title: '주님과 함께 걷는 길은',
    description: '2025년 10월 18일(토) 오후 3시\n새문안교회 1층 새문안홀',
    url: '/',
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
        <ImagePreloader />
        <main className="pb-20">
          {children} <Analytics />
          <KakaoScript />
        </main>
      </body>
    </html>
  );
}
