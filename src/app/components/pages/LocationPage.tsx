'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Navigation,
  BusFront,
  CarFront,
  TramFront,
} from 'lucide-react';
import { Button } from '../ui/button';
import { useRef, useState } from 'react';
import Script from 'next/script';

interface LocationPageProps {
  venue: string;
  venueAddress: string;
  imageUrl: string;
}

export function LocationPage({ venue, venueAddress }: LocationPageProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // 새문안교회 좌표
  const CHURCH_COORDS = {
    lat: 37.5720937,
    lng: 126.9730817,
  };

  // 네이버 지도 초기화
  const initializeMap = () => {
    if (!mapRef.current || !window.naver || !window.naver.maps) {
      console.log('Naver Maps API not loaded yet');
      return;
    }
    const location = new window.naver.maps.LatLng(
      CHURCH_COORDS.lat,
      CHURCH_COORDS.lng
    );

    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
    };

    try {
      const map = new window.naver.maps.Map(mapRef.current, mapOptions);

      // 마커 추가
      new window.naver.maps.Marker({
        position: location,
        map: map,
        title: venue,
        icon: {
          content: `
          <div style="
            position: relative;
            background: #065f46;
            color: white;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            box-shadow: 0 4px 6px rgba(0,0,0,0.2);
            white-space: nowrap;
          ">
            ${venue}
            <div style="
              position: absolute;
              bottom: -6px;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 0;
              border-left: 6px solid transparent;
              border-right: 6px solid transparent;
              border-top: 6px solid #065f46;
            "></div>
          </div>
        `,
          size: new window.naver.maps.Size(100, 40),
          anchor: new window.naver.maps.Point(50, 45),
        },
      });

      setMapLoaded(true);
      console.log('Map initialized successfully');
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const openIOSApp = (appUrl: string, fallbackUrl: string) => {
    const clickedAt = Date.now();

    // 앱 실행 시도
    window.location.href = appUrl;

    // 1.5초 후 앱이 실행되지 않았으면 App Store로 이동
    setTimeout(() => {
      if (Date.now() - clickedAt < 2000) {
        window.location.href = fallbackUrl;
      }
    }, 1500);
  };
  // 네이버 지도 앱으로 열기
  const handleOpenNaverMap = () => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isAndroid) {
      // Android: Intent URL 사용 (앱이 없으면 자동으로 Play Store로 이동)
      const intentUrl = `intent://place?lat=${CHURCH_COORDS.lat}&lng=${
        CHURCH_COORDS.lng
      }&name=${encodeURIComponent(
        venue
      )}&appname=com.example.myapp#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end`;

      window.location.href = intentUrl;
    } else if (isIOS) {
      // iOS: JavaScript 타이머를 이용한 fallback 처리
      const naverMapUrl = `nmap://place?lat=${CHURCH_COORDS.lat}&lng=${
        CHURCH_COORDS.lng
      }&name=${encodeURIComponent(venue)}&appname=com.example.myapp`;

      const appStoreUrl = 'https://itunes.apple.com/app/id311867728?mt=8';

      openIOSApp(naverMapUrl, appStoreUrl);
    } else {
      // PC: 네이버 지도 웹 열기
      window.open(
        `https://map.naver.com/v5/search/${encodeURIComponent(venueAddress)}`,
        '_blank'
      );
    }
  };

  // 길찾기 기능
  const handleNavigation = () => {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isAndroid) {
      // Android: Intent URL로 길찾기
      const intentUrl = `intent://route/public?dlat=${CHURCH_COORDS.lat}&dlng=${
        CHURCH_COORDS.lng
      }&dname=${encodeURIComponent(
        venue
      )}&appname=com.example.myapp#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end`;

      window.location.href = intentUrl;
    } else if (isIOS) {
      // iOS: 타이머 기반 fallback
      const naverMapUrl = `nmap://route/public?dlat=${CHURCH_COORDS.lat}&dlng=${
        CHURCH_COORDS.lng
      }&dname=${encodeURIComponent(venue)}&appname=com.example.myapp`;

      const appStoreUrl = 'https://itunes.apple.com/app/id311867728?mt=8';

      openIOSApp(naverMapUrl, appStoreUrl);
    } else {
      // PC: 네이버 지도 웹 길찾기
      window.open(
        `https://map.naver.com/v5/directions/-/-/-/transit?c=${
          CHURCH_COORDS.lng
        },${CHURCH_COORDS.lat},15,0,0,0,dh&destination=${encodeURIComponent(
          venue
        )},${CHURCH_COORDS.lng},${CHURCH_COORDS.lat}`,
        '_blank'
      );
    }
  };

  return (
    <>
      {/* 네이버 지도 스크립트 로드 */}
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
        onReady={initializeMap}
      />

      <div className="min-h-screen bg-stone-50 pb-24 overflow-y-auto">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-8 pb-6 px-6 text-center"
          >
            <h2 className="text-2xl text-gray-900 mb-1">오시는 길</h2>
            <p className="text-sm text-gray-600">Location</p>
          </motion.div>

          <div className="px-6 space-y-5">
            {/* Venue Info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-sm bg-gradient-to-br from-emerald-700 to-emerald-900 p-6 text-white"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl mb-2 font-semibold">{venue}</h3>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    {venueAddress}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Naver Map */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <div
                ref={mapRef}
                className="w-full h-64 rounded-xl overflow-hidden bg-gray-100"
              />

              <div className="grid grid-cols-2 gap-2 mt-4">
                <Button
                  onClick={handleOpenNaverMap}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  지도 열기
                </Button>
                <Navigation className="w-4 h-4 mr-2" />
                <Button
                  onClick={handleNavigation}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl"
                >
                  길찾기
                </Button>
              </div>
            </motion.div>

            {/* Getting There */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <h3 className="text-base text-gray-900 px-1">교통편</h3>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-emerald-50 rounded-lg flex-shrink-0">
                    <TramFront className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm text-gray-900 mb-2 font-semibold">
                      지하철 노선 안내
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      5호선 광화문역 1번 출구 : 도보 약 270m (정문)
                      <br />
                      5호선 광화문역 8번 출구 : 도보 약 150m (후문)
                      <br />
                      3호선 경복궁역 : 도보 약 500m (후문)
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-blue-50 rounded-lg flex-shrink-0">
                      <BusFront className="w-5 h-5 text-blue-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm text-gray-900 mb-2 font-semibold">
                        버스 노선 안내
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        101 160 260 270 271 273 370 470 600 601 602 704 705 720
                        721 741 702A 702B 7019
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-purple-50 rounded-lg flex-shrink-0">
                    <CarFront className="w-5 h-5 text-purple-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm text-gray-900 mb-1 font-semibold">
                      자가용
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      교회 지하주차장 이용 가능
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-emerald-50 rounded-xl p-4 border border-emerald-100"
            >
              <p className="text-xs text-emerald-900 text-center">
                장애인 편의시설이 완비되어 있습니다
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
