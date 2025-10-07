import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Bus, Car, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

interface LocationPageProps {
  venue: string;
  venueAddress: string;
  imageUrl: string;
}

export function LocationPage({ venue, venueAddress }: LocationPageProps) {
  return (
    <div className="min-h-screen bg-stone-50 pb-24">
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
          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="relative">
              <Image
                src="/images/background.jpg"
                alt="Venue"
                width={300}
                height={400}
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl mb-1">{venue}</h3>
                <p className="text-sm text-white/90">{venueAddress}</p>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-4 shadow-sm"
          >
            <div className="aspect-video bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-gray-400"
                    style={{
                      width: '1px',
                      height: '100%',
                      left: `${i * 12.5}%`,
                    }}
                  />
                ))}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute bg-gray-400"
                    style={{
                      height: '1px',
                      width: '100%',
                      top: `${i * 16.67}%`,
                    }}
                  />
                ))}
              </div>
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
              >
                <MapPin
                  className="w-12 h-12 text-emerald-700 drop-shadow"
                  fill="currentColor"
                />
              </motion.div>
            </div>
            <Button className="w-full mt-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl">
              <Navigation className="w-4 h-4 mr-2" />
              지도에서 열기
            </Button>
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
                  <Bus className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm text-gray-900 mb-1">대중교통</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    지하철 5호선 광화문역 3번 출구
                    <br />
                    도보 5분
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-blue-50 rounded-lg flex-shrink-0">
                  <Car className="w-5 h-5 text-blue-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm text-gray-900 mb-1">자가용</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    건물 내 주차장 이용 가능
                    <br />
                    <span className="text-xs text-gray-500">
                      2시간 무료 주차
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-5 shadow-sm"
          >
            <h3 className="text-sm text-gray-900 mb-3">문의</h3>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>입장 시작: 오후 7:00</span>
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
  );
}
