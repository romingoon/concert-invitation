import { motion } from 'framer-motion';
import { ListMusic } from 'lucide-react';

interface ProgramItem {
  composer: string;
  songTitle: string;
  performers: string;
}

export function ProgramPage() {
  const programs: ProgramItem[] = [
    {
      composer: '이현철',
      songTitle: '왕이신 나의 하나님',
      performers: 'sop.임서연 / pf.김윤희',
    },
    {
      composer: 'C. Franck',
      songTitle: '생명의 양식',
      performers: 'bar.이경진 / pf.김보미',
    },
    {
      composer: '오병희',
      songTitle: '주님 만드신 세상',
      performers: 'sop.이승숙, bar.하범 / pf.김윤희',
    },
    {
      composer: '홍영은 편곡',
      songTitle: '오 신실하신 주',
      performers: 'pf.홍영은',
    },
    {
      composer: '홍지열 편곡',
      songTitle: '너 예수께 조용히 나가',
      performers: 'sop.고연주 / pf.김윤희',
    },
    {
      composer: '나운영',
      songTitle: '여호와는 나의 목자시니',
      performers: 'bar.박재용 / pf.이원섭',
    },
    {
      composer: 'S. Fietz',
      songTitle: '선한 능력으로',
      performers: 'm.sop.민은홍, 이윤옥 / pf.김보미',
    },
    {
      composer: '손경민',
      songTitle: '주의 은혜라',
      performers: 'bar.김창동 / pf.이원섭',
    },
    {
      composer: '양재훈 편곡',
      songTitle: '예수를 나의 구주 삼고',
      performers: 'sop.김보미 / pf.홍영은',
    },
    {
      composer: '',
      songTitle: '나 같은 죄인 살리신',
      performers: 'bar.이원섭 / pf.홍영은',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 pb-24 overflow-y-auto">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pt-6 pb-4 px-4 text-center"
        >
          <h2 className="text-2xl text-gray-900 mb-1">연주 프로그램</h2>
          <p className="text-sm text-gray-600">Program</p>
        </motion.div>

        {/* Program List */}
        <div className="px-6 space-y-2">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-1">
                    <ListMusic className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <h3 className="text-base text-gray-900 leading-snug">
                      {item.songTitle}
                    </h3>

                    <p className="text-base text-gray-600 text-xs align-bottom">
                      &#40;{item.composer}&#41;
                    </p>
                  </div>
                  <div className="space-y-0.5 text-sm">
                    <p className="text-gray-700 text-right">
                      {item.performers}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
