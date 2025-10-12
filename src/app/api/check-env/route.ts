// app/api/check-env/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

  return NextResponse.json({
    hasKakaoKey: !!kakaoKey,
    keyLength: kakaoKey?.length || 0,
    keyPreview: kakaoKey ? `${kakaoKey.substring(0, 10)}...` : 'NOT SET',
    nodeEnv: process.env.NODE_ENV,
  });
}
