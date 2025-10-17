'use client';

import { motion } from 'framer-motion';
import { Share2, Link as LinkIcon, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

interface ShareSectionProps {
  title: string;
  url?: string;
}

export function ShareSection({ title, url }: ShareSectionProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const imageUrl = 'https://concert-invitation.vercel.app/images/kakaothum.jpg';
  const pageUrl = 'https://concert-invitation.vercel.app';
  // 클라이언트에서만 URL 가져오기
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(url || window.location.href);
    }
  }, [url]);

  const handleKakaoShare = () => {
    if (typeof window === 'undefined') return;

    const { Kakao } = window;

    if (!Kakao || !Kakao.isInitialized()) {
      alert('카카오 SDK를 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    // sendDefault 사용 (커스텀 버튼)
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '주님과 함께 걷는 길은 모바일 프로그램북',
        description: '2025년 10월 18일(토) 오후 3시\n새문안교회 1층 새문안홀',
        imageUrl: imageUrl,
        link: {
          mobileWebUrl: pageUrl,
          webUrl: pageUrl,
        },
      },
      buttons: [
        {
          title: '프로그램북 보기',
          link: {
            mobileWebUrl: pageUrl,
            webUrl: pageUrl,
          },
        },
      ],
    });
  };

  const handleCopyLink = async () => {
    if (!currentUrl) return;

    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback 복사 실패:', fallbackErr);
        alert(`링크를 복사하세요: ${currentUrl}`);
      }

      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50 flex items-center justify-center pb-24 px-6">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="p-5 bg-white rounded-full shadow-lg">
              <Share2 className="w-10 h-10 text-emerald-700" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h2 className="text-2xl text-gray-900">초대장 공유하기</h2>
            <p className="text-sm text-gray-600">
              소중한 분들과 이 특별한 연주회를 함께하세요
            </p>
          </div>

          {/* Share Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleKakaoShare}
              className="w-full h-14 bg-[#FEE500] hover:bg-[#FDD835] text-gray-900 rounded-xl shadow-md transition-all hover:shadow-lg"
            >
              <svg
                className="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.838 2.014 5.313 5 6.563v3.437l3.281-1.969C11.125 18.531 11.563 18.5 12 18.5c5.523 0 10-3.477 10-8S17.523 3 12 3z" />
              </svg>
              카카오톡으로 공유
            </Button>

            <Button
              onClick={handleCopyLink}
              className="w-full h-14 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-xl shadow-md transition-all hover:shadow-lg"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 mr-3 text-emerald-600" />
                  링크가 복사되었습니다
                </>
              ) : (
                <>
                  <LinkIcon className="w-5 h-5 mr-3" />
                  링크 복사하기
                </>
              )}
            </Button>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-6"
          >
            <p className="text-xs text-gray-500">
              함께 찬양하며 주님을 경배하는 시간에 초대합니다
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
