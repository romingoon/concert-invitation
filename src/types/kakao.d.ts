// src/types/kakao.d.ts 또는 프로젝트 루트/kakao.d.ts

/**
 * Kakao SDK 타입 정의
 */

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: {
          objectType: 'feed' | 'list' | 'location' | 'commerce' | 'text';

          content: {
            title: string;
            description: string;
            imageUrl: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          };
          buttons?: Array<{
            title: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          }>;
        }) => void;
        sendScrap: (options: { requestUrl: string }) => void;
      };
      Channel?: {
        chat: (options: { channelPublicId: string }) => void;
      };
    };
  }
}

export {};
