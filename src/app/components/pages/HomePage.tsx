import { motion } from 'framer-motion';
import { Music } from 'lucide-react';
import Image from 'next/image';
import '../../global.css';
import localFont from 'next/font/local';
interface HomePageProps {
  title: string;
  subtitle: string;
  organizer: string;
  concertDate: string;
  concertTime: string;
  venueDetail: string;
}

const byulbam = localFont({
  src: '../../fonts/byulbam.ttf',
  variable: '--font-byulbam',
  display: 'swap',
});

export function HomePage({
  title,
  subtitle,
  organizer,
  concertDate,
  concertTime,
  venueDetail,
}: HomePageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.jpg"
          className="w-full h-full object-cover"
          alt="Background"
          fill
          priority
          placeholder="blur"
          blurDataURL="image/jpeg;base64,..." // 자동 생성됨
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-5 mb-10"
        >
          <div className="space-y-4">
            <p
              className="text-sm text-white/95 tracking-wider"
              style={{
                color: '#FFFEF7',
                fontWeight: 500,
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                letterSpacing: '0.05em',
                transform: 'rotate(-1deg)',
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Main Title - Calligraphy Style */}
          <div className="px-4 py-8">
            <h1
              className={`${byulbam.variable} font-byulbam leading-tight tracking-wide text-shadow-lg/70`}
              style={{
                fontSize: '2rem',
                fontWeight: 900,
                color: '#FFFEF7',
                letterSpacing: '0.05em',
                transform: 'rotate(-1deg)',
              }}
            >
              {title}
            </h1>
          </div>

          <div className="space-y-3 pt-4">
            <p
              className="text-base text-white/95"
              style={{
                color: '#FFFEF7',
                fontWeight: 500,
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              {concertDate}
            </p>
            <p
              className="text-sm text-white/90"
              style={{
                color: '#FFFEF7',
                fontWeight: 500,
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              {concertTime}
            </p>{' '}
            <p
              className="text-sm text-white/90"
              style={{
                color: '#FFFEF7',
                fontWeight: 500,
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              {venueDetail}
            </p>
          </div>
        </motion.div>

        {/* Invitation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p
            className="text-lg text-white/95 px-8 py-3 rounded-full inline-block"
            style={{
              color: '#FFFEF7',
              fontWeight: 500,
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              fontFamily: "'Nanum Myeongjo', 'Noto Serif KR', serif",
            }}
          >
            여러분을 초대합니다.
          </p>
        </motion.div>

        {/* Organizer Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2.5 rounded-full shadow-lg">
            <Music className="w-4 h-4 text-emerald-700" />
            <span className="text-xs text-emerald-800 tracking-wide">
              {organizer}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
