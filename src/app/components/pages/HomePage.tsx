import { motion } from 'framer-motion';
import { Music } from 'lucide-react';
import Image from 'next/image';

interface HomePageProps {
  artistName: string;
  concertDate: string;
  concertTime: string;
  imageUrl: string;
}

export function HomePage({
  artistName,
  concertDate,
  concertTime,
  imageUrl,
}: HomePageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.jpg"
          fill
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-3 bg-white/95 px-6 py-2.5 rounded-full shadow-sm">
            <Music className="w-4 h-4 text-emerald-700" />
            <span className="text-xs text-emerald-800 uppercase tracking-wide">
              제5회 새로핌 교회음악 페스티벌
            </span>
          </div>

          <h1 className="text-4xl text-gray-900 mb-3 px-4">{artistName}</h1>

          <div className="space-y-1.5">
            <p className="text-xl text-gray-800">{concertDate}</p>
            <p className="text-lg text-gray-700">{concertTime}</p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative w-full max-w-sm mb-8"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white">
            <Image
              src={imageUrl}
              alt="Concert"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Invitation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-base text-gray-800 bg-white/90 px-8 py-3 rounded-full inline-block shadow-sm">
            여러분을 초대합니다
          </p>
        </motion.div>
      </div>
    </div>
  );
}
