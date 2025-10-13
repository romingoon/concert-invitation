import { motion } from 'framer-motion';
import { Music, Heart } from 'lucide-react';

interface ConcertInfoPageProps {
  title: string;
  subtitle: string;
  organizer: string;
  imageUrl?: string;
}

export function ConcertInfoPage({ title }: ConcertInfoPageProps) {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 overflow-y-auto">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-8 pb-6 px-6 text-center"
        >
          <h2 className="text-2xl text-gray-900 mb-1">연주회 소개</h2>
          <p className="text-sm text-gray-600">{title}</p>
        </motion.div>

        <div className="px-6 space-y-5">
          {/* About the Concert */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Music className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="text-lg text-gray-900">연주회 소개</h3>
            </div>
            <div className="space-y-3.5 text-sm text-gray-700 leading-relaxed">
              <p>
                ‘주님과 함께 걷는 길은’은 새문안교회 새로핌찬양대가 주최하는
                새로핌 교회음악 페스티벌의 특별한 찬양 연주회입니다.
              </p>
              <p>
                이번 연주회는 전문 음악인이 아닌 찬양대원들과 지휘자, 솔리스트가
                함께 연주자로 나서 각자의 신앙 이야기를 음악으로 고백하는 특별한
                자리입니다.
              </p>
              <p>
                완벽한 기교보다는 진실한 마음으로, 화려함보다는 순수한 열정으로
                드리는 찬양입니다. 용기 내어 무대에 선 성도들의 진심 어린 고백과
                주님을 향한 사랑이 여러분의 마음에 따뜻하게 전해지기를
                소망합니다.
              </p>
            </div>
          </motion.div>
          {/* Planning Intent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 bg-emerald-700 rounded-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg text-gray-900">기획 의도</h3>
            </div>
            <div className="space-y-3.5 text-sm text-gray-800 leading-relaxed">
              <p>
                이번 연주회는 독창 위주로 구성되어, 각 찬양대원이 주님과 함께
                걸어온 개인의 신앙 여정을 온전히 담아냅니다. 전문 음악가가 아닌
                평범한 성도들이 독창 무대에 선다는 것은 큰 도전이지만, 자신의
                부족함을 내려놓고 주님만을 의지하는 믿음의 고백입니다.
              </p>
              <p>
                서로 다른 목소리들이 모여 ‘주님과 함께 걷는 길’이라는 하나의
                찬양 이야기를 완성하며, 이는 다양한 지체로 이루어진 교회
                공동체의 아름다움을 보여줍니다.
              </p>
              <p>
                각자의 독창 무대가 살아있는 신앙 간증이 되고, 관객
                여러분들에게도 “나도 주님께 찬양할 수 있다”는 용기와 위로를
                전하는 은혜로운 시간이 되기를 소망합니다.
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
              “내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은
              주께서 나와 함께 하심이라”
            </p>
            <p className="text-xs text-gray-400">- 시편 23편 4절</p>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-emerald-50 rounded-xl p-4 border border-emerald-100"
          >
            <p className="text-xs text-emerald-900 text-center">
              주님의 이름으로 여러분을 환영합니다!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
