import { motion } from 'framer-motion';
import { Music } from 'lucide-react';
import Image from 'next/image';
interface HomePageProps {
  title: string;
  subtitle: string;
  organizer: string;
  concertDate: string;
  concertTime: string;
  venue: string;
}

export function HomePage({
  title,
  subtitle,
  organizer,
  concertDate,
  concertTime,
  venue,
}: HomePageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          priority
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
          className="text-center space-y-5 mb-10"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-white/95 px-5 py-2 rounded-full shadow-sm">
              <Music className="w-4 h-4 text-emerald-700" />
              <span className="text-xs text-emerald-800 tracking-wide">
                {subtitle}
              </span>
            </div>
          </div>

          <div className="space-y-2 px-4">
            <h1 className="text-4xl text-white-900">{title}</h1>
            <p className="text-base text-gray-700">{organizer}</p>
          </div>

          <div className="space-y-1.5 pt-2">
            <p className="text-xl text-gray-800">{concertDate}</p>
            <p className="text-lg text-gray-700">{concertTime}</p>
            <p className="text-lg text-gray-700">{venue}</p>
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
