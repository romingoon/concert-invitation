import { motion } from 'framer-motion';
import { Music, Heart } from 'lucide-react';
import Image from 'next/image';

interface ConcertInfoPageProps {
  artistName: string;
  imageUrl?: string;
}

export function ConcertInfoPage({
  artistName,
  imageUrl = 'https://images.unsplash.com/photo-1709586354086-87c262c5d505?w=800&q=80',
}: ConcertInfoPageProps) {
  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-8 pb-6 px-6 text-center"
        >
          <h2 className="text-2xl text-gray-900 mb-1">연주회 소개</h2>
          <p className="text-sm text-gray-600">{artistName}</p>
        </motion.div>

        <div className="px-6 space-y-5">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-sm"
          ></motion.div>

          {/* About the Concert */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Music className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="text-lg text-gray-900">연주회 개요</h3>
            </div>
            <div className="space-y-3.5 text-sm text-gray-700 leading-relaxed">
              <p>
                이번 연주회는 새로핌찬양대가 주최하는 교회음악 페스티벌로,
                신앙의 여정을 함께 걸어가는 모든 이들을 위한 특별한 시간입니다.
              </p>
              <p>
                주님과 동행하는 삶의 여정을 음악으로 표현하며, 각 곡마다 담긴
                믿음의 고백과 간증을 통해 하나님의 인도하심을 경험하는 시간이 될
                것입니다.
              </p>
              <p>
                클래식 성가부터 현대 찬양까지 다양한 레퍼토리를 통해 세대를
                아우르는 영적 교감을 나누며, 함께 하나님을 찬양하는 은혜로운
                예배의 장이 펼쳐집니다.
              </p>
            </div>
          </motion.div>

          {/* Planning Intent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 bg-emerald-700 rounded-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg text-gray-900">기획 의도</h3>
            </div>
            <div className="space-y-3.5 text-sm text-gray-800 leading-relaxed">
              <p>
                이번 연주회는 신앙의 여정이 결코 혼자가 아닌, 주님과 함께 걷는
                길임을 음악을 통해 확인하고 고백하는 시간입니다.
              </p>
              <p>
                바쁜 일상 속에서 때로는 방황하고 지칠 때가 있지만, 찬양을 통해
                다시 주님께로 시선을 돌리고, 그분의 인도하심 안에서 평안과
                소망을 발견하길 소망합니다.
              </p>
              <p>
                또한 교회 공동체가 하나 되어 찬양하며, 각자의 신앙 여정을 나누고
                서로를 격려하는 축복의 장이 되기를 기도합니다.
              </p>
              <p>
                이 연주회를 통해 모든 참석자가 주님과 더욱 깊이 동행하는 삶으로
                나아가며, 일상에서 주님의 임재를 경험하는 은혜를 누리시기를
                바랍니다.
              </p>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900 rounded-2xl p-6 shadow-sm"
          >
            <p className="text-sm italic text-gray-100 leading-relaxed mb-3">
              시와 찬송과 신령한 노래들로 서로 화답하며
              <br />
              너희의 마음으로 주께 노래하며 찬송하며
            </p>
            <p className="text-xs text-gray-400">- 에베소서 5:19</p>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-emerald-50 rounded-xl p-4 border border-emerald-100"
          >
            <p className="text-xs text-emerald-900 text-center">
              주님의 이름으로 여러분을 환영합니다
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
