import { motion } from 'framer-motion';
import { Music2 } from 'lucide-react';

interface ProgramItem {
  songTitle: string;
  performer: string;
  accompanist: string;
}

export function ProgramPage() {
  const programs: ProgramItem[] = [
    {
      songTitle: 'Amazing Grace',
      performer: '소프라노 김은혜',
      accompanist: '피아노 박성은',
    },
    {
      songTitle: '주님의 기도',
      performer: '테너 이요한',
      accompanist: '오르간 최민지',
    },
    {
      songTitle: 'Ave Maria',
      performer: '메조소프라노 정마리아',
      accompanist: '피아노 박성은',
    },
    {
      songTitle: '나 주의 도움 받고자',
      performer: '바리톤 강다윗',
      accompanist: '피아노 송지혜',
    },
    {
      songTitle: 'Panis Angelicus',
      performer: '소프라노 김은혜 & 테너 이요한',
      accompanist: '오르간 최민지',
    },
    {
      songTitle: '주 은혜임을',
      performer: '알토 안사라',
      accompanist: '피아노 송지혜',
    },
    {
      songTitle: 'O Holy Night',
      performer: '테너 이요한',
      accompanist: '오르간 최민지',
    },
    {
      songTitle: '내 주를 가까이',
      performer: '전체 합창',
      accompanist: '피아노 & 오르간 앙상블',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-8 pb-6 px-6 text-center"
        >
          <h2 className="text-2xl text-gray-900 mb-1">연주 프로그램</h2>
          <p className="text-sm text-gray-600">Program</p>
        </motion.div>

        {/* Program List */}
        <div className="px-6 space-y-3">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <span className="text-sm text-emerald-800">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-2">
                    <Music2 className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <h3 className="text-base text-gray-900 leading-snug">
                      {item.songTitle}
                    </h3>
                  </div>
                  <div className="space-y-0.5 text-sm">
                    <p className="text-gray-700">{item.performer}</p>
                    <p className="text-gray-500 text-xs">{item.accompanist}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 mx-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100"
        >
          <p className="text-xs text-emerald-900 text-center leading-relaxed">
            프로그램은 현장 사정에 따라 변경될 수 있습니다
          </p>
        </motion.div>
      </div>
    </div>
  );
}
