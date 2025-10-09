// src/types/kakao.d.ts 또는 프로젝트 루트/kakao.d.ts

/**
 * Kakao SDK 타입 정의
 */
interface KakaoShareContent {
  title: string;
  description: string;
  imageUrl: string;
  link: {
    mobileWebUrl: string;
    webUrl: string;
  };
}

interface KakaoShareButton {
  title: string;
  link: {
    mobileWebUrl: string;
    webUrl: string;
  };
}

interface KakaoShareOptions {
  objectType: 'feed' | 'list' | 'location' | 'commerce' | 'text';
  content: KakaoShareContent;
  buttons?: KakaoShareButton[];
}

interface KakaoShare {
  sendDefault: (options: KakaoShareOptions) => void;
  sendScrap: (options: { requestUrl: string }) => void;
}

interface Kakao {
  init: (appKey: string) => void;
  isInitialized: () => boolean;
  Share: KakaoShare;
}

declare global {
  interface Window {
    Kakao: Kakao;
  }
}

export {};
