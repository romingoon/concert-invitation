'use client';

import { motion } from 'framer-motion';
import { ListMusic, FileText, Music2, Info, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

interface ProgramItem {
  composer: string;
  songTitle: string;
  performers: string;
  description?: string;
  lyrics?: string;
}

export function ProgramPage() {
  const [selectedSong, setSelectedSong] = useState<ProgramItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const programs: ProgramItem[] = [
    {
      composer: '이현철',
      songTitle: '왕이신 나의 하나님',
      performers: 'sop.임서연 / pf.김윤희',
      description: `이 곡은 이현철 작곡가가 시편 145편 말씀을 바탕으로 작사, 작곡한 성가입니다.  다윗의 찬송시를 따뜻한 선율로 재탄생시켰습니다.반복되는 멜로디가 경배의 마음을 깊이 전하며,소프라노의 청아한 음색이 돋보입니다. 부드럽게 고조되는 선율이 감동을 더합니다. 하나님을 나의 왕으로 높이며 그분의 은혜로우심과 인자하심을 날마다 찬양하는 메시지를 전합니다.`,
      lyrics: `왕이신 나의 하나님 내가 주를 높이고
              영원히 주 이름을 송축하리다
              왕이신 나의 하나님 내가 주를 높이고
              영원히 주 이름을 송축하리다

              내가 날마다 주를 송축하며
              내가 영원히 주의 이름을 송축하리다
              주의 이름을 송축하리다
              왕이신 하나님 (왕이신 나의 하나님)

              내가 주를 높이고
              영원히 주 이름을 송축하리다

              주는 은혜로우시며
              주는 자비하시며
              주는 노하길 더디하시며
              인자하심이 크시도다 (크시도다)

              왕이신 하나님 (왕이신 나의 하나님)
              내가 주를 높이고
              영원히 주 이름을 송축하리다
              송축하리다 (송축하리다)`,
    },
    {
      composer: 'C. Franck',
      songTitle: '생명의 양식',
      performers: 'bar.이경진 / pf.김보미',
      description: `세자르 프랑크가 1872년 성 토마스 아퀴나스의 찬미가를 바탕으로 작곡했습니다. 평생 깊은 신앙 속에 살았던 그의 경건함이 담겨 있습니다. ​차분하고 서정적인 선율이 마음을 편안하게 하며,  바리톤의 따뜻한 음색이 곡의 깊이를 더합니다. 가난하고 낮은 자에게 베푸시는 하나님의 은혜와 생명의 양식을 구하는 간절한 기도를 노래합니다.
`,
      lyrics: `생명의 양식을 하늘의 만나를
맘이 빈 자에게 내리어 주소서
낮고 천한 우리 긍휼히 보시사
주여, 주여 먹이어 주소서
주여, 주여 먹이어 주소서

주님이 해변서 떡을 떼심같이
하늘의 양식을 내리어 주소서
낮고 천한 우리 긍휼히 보시사
주여, 주여 먹이어 주소서
주여, 주여 먹이어 먹이어 주소서`,
    },
    {
      composer: '오병희',
      songTitle: '주님 만드신 세상',
      performers: 'sop.이승숙, bar.하범 / pf.김윤희',
      description: `오병희 작곡가가 창조주 하나님께 드리는 감사로 만든 찬양입니다. 이른 아침부터 밤하늘까지, 주님이 지으신 세상의 아름다움을 노래합니다.​밝고 경쾌한 선율이 하나님의 창조세계를 표현합니다. 듀엣의 조화로운 화음이 기쁨과 감사를 전합니다.​주님의 솜씨를 찬양하며, 우리를 돌보시는 하나님의 사랑에 감사하는 고백입니다.`,
      lyrics: `이른 아침의 밝은 태양과 저 어둔 밤하늘의 빛난 별
푸른 숲 맑은 시냇물 가로 우리 주님 만드신 세상​

깊은 바다와 저 높은 산 푸른 하늘과 붉은 노을
주신 주 솜씨 찬양해 오 놀라우신 주 영광 기뻐해​

찬양 아름다운 이 세상 모든 것 
만드신 우리 주님의 솜씨 노래해
찬양 놀라운 이 세상 주님 찬양합니다​

저 푸른 하늘 위의 새들과 
저 들에 피는 작은 꽃들도
먹이시고 입히시며 돌봐주시네​

주 형상대로 나를 빚으사 
그 코에 생기를 넣으시고
생명을 주신 주 늘 동행하여 주시네​

찬양 아름다운 이 세상 모든 것 
만드신 우리 주님의 솜씨 노래해
찬양 놀라운 이 세상 주를 찬양해​

주 찬양 주를 찬양 이 세상 만드신 주님 찬양
하늘의 구름도 산 위의 바람도 
오 놀라우신 주 영광 기뻐해​

찬양 주 찬양 아름다운 이 세상 만드신 주
찬양 찬양 주 찬양 주를 찬양 주 찬양​`,
    },
    {
      composer: '홍영은 편곡',
      songTitle: '오 신실하신 주',
      performers: 'pf.홍영은',
      description: `1923년 토마스 치좀이 예레미야 애가 3장 23절 "주의 성실하심이 크시도소이다"에 감동받아 지은 찬송입니다. 
차분하고 서정적인 선율 속에서 평안과 위로가 느껴집니다. 피아노의 부드러운 음색이 신실하심을 깊이 전합니다.​​
날마다 새로운 자비를 베푸시는 하나님의 변치 않는 사랑을 노래합니다.`,
      lyrics: `오 신실하신 주 내 아버지여
늘 함께 계셔니 두렴없네
그 사랑 변찮고 날 지키시며
어제나 오늘이 한결같네​

봄철과 또 여름 가을과 겨울
해와 달 별들도 다 주의 것
만물이 주 영광 드러내도다
신실한 주 사랑 나타내네​

죄 사함 받으며 참 평안 얻고
성령의 위로를 힘입도다
현재와 장래의 모든 일에도
큰 소망 주시니 감사하네​

후렴
오 신실하신 주 오 신실하신 주
날마다 자비를 베푸시며
일용할 모든 것 내려주시니
오 신실하신 주 나의 구주​
`,
    },
    {
      composer: '홍지열 편곡',
      songTitle: '너 예수께 조용히 나가',
      performers: 'sop.고연주 / pf.김윤희',
      description: `이 곡은 미국의 엘리자 휴윗이 고난 중 용서와 회개를 경험한 후 작사하고, 커크패트릭이 작곡한 복음찬송입니다. 홍지열이 현대적으로 편곡해, 친숙한 멜로디에 새로운 감성을 더했습니다.  조용하고 경건한 분위기에서 고백의 마음을 담아냅니다. 소프라노의 맑은 음색이 곡의 깊이를 더합니다. ​힘든 상황 속에서 예수님께 모든 짐을 내려놓는 위로를 담았습니다. 주님의 십자가 사랑을 믿고 은혜를 받아 용서와 사랑을 실천하라는 초청의 메시지를 전합니다.​
`,
      lyrics: `너 예수께 조용히 나가 네 모든 짐 내려놓고
주 십자가 사랑을 믿어 죄 사함을 너 받으라​

주 예수의 은혜를 입어 네 슬픔이 없어지리
네 이웃을 늘 사랑하여 너 받은 것 거저 주라​

주 예수를 친구로 삼아 늘 네 옆에 모시어라
그 영원한 생명 샘 물에 네 마른 목 축이어라​

너 주님과 사귀어 살면 새 생명이 넘치리라
주 예수를 찾는 이 앞에 참 밝은 빛 비추어라​

후렴:
주 예수께 조용히 나가 네 마음을 쏟아노라
늘 은밀히 보시는 주님 큰 은혜를 베푸시리​
`,
    },
    {
      composer: '나운영',
      songTitle: '여호와는 나의 목자시니',
      performers: 'bar.박재용 / pf.이원섭',
      description: `이 곡은 1953년 6.25 피난 시절, 나운영이 3분 만에 작곡한 성가입니다. 전쟁의 아픔 속에서도 하나님을 의지하는 간절함을 담았습니다.​
한국적 정서가 담긴 목가적 선율이 편안함과 신뢰를 전합니다. 바리톤의 따뜻한 음색이 위로와 평안을 더합니다.​​
시편 23편의 말씀처럼, 어려움 속에서도 우리를 인도하시는 하나님의 선하심과 인자하심을 고백합니다.`,
      lyrics: `여호와는 나의 목자시니 내게 부족함이 없으리로다
여호와는 나의 목자시니 내게 부족함이 없으리로다

나로 하여금 푸른 초장에 눕게 하시며
잔잔한 물가로 잔잔한 물가로 인도하시도다

진실로 선함과 인자하심이 인자하심이
나의 사는 날까지 나를 따르리니

내가 내가 여호와 전에 
영원토록 영원토록
영원토록 거하리로다

진실로 선함과 인자하심이 인자하심이
나의 사는 날까지 나를 따르리니 

내가 내가 여호와 전에
영원토록 영원토록
영원토록 거하리로다 아멘`,
    },
    {
      composer: 'S. Fietz',
      songTitle: '선한 능력으로',
      performers: 'm.sop.민은홍, 이윤옥 / pf.김보미',
      description: `1944년 겨울, 독일 신학자 본회퍼 목사가 옥중에서 썼습니다. 나치에 저항하다 죽음을 앞둔 순간에도 하나님을 향한 신앙을 담았습니다. 독일 음악가 피에츠가 고요하고 담백한 선율로 곡을 붙였습니다.고요하고 차분한 선율이 평화를 전합니다. 두 목소리가 어우러져 따뜻함을 더합니다.​절망 속에서도 주님의 선한 능력이 감싸주신다는 믿음과 날마다 새로워지는 자비를 노래합니다.​`,
      lyrics: `
주 선한 능력으로 안으시네
그 크신 팔로 날 붙드시네
절망 속에도 흔들리지 않고
사랑하는 주 얼굴 구하리

이전의 괴로움 날 에워싸고
고난의 길을 걷는다 해도
주님께 모두 맡긴 우리 영혼
끝내 승리의 날을 맞으리

​선한 능력으로 일어서리
주만 의지하리 믿음으로
우리 고대하네 주 오실 그날
영광의 새 날을 맞이하리

주 선한 능력으로 안으시네
그 크신 팔로 날 붙드시네
절망 속에도 흔들리지 않고
사랑하는 주 얼굴 구하리

주님이 마신 고난의 쓴 잔을
우리도 감사하며 받으리
주님의 남은 고난 채워가며
예수와 복음 위해 살리라

선한 능력으로 일어서리
주만 의지하리 믿음으로
우리 고대하네 주 오실 그날
영광의 새 날을 맞이하리

우리 고대하네 주 오실 그날
승리의 새 날을 맞이하리`,
    },
    {
      composer: '손경민',
      songTitle: '주의 은혜라',
      performers: 'bar.김창동 / pf.이원섭',
      description: `손경민 작곡가가 지나온 삶을 돌아보며 작사·작곡한 곡입니다. 평생의 삶을 돌아볼 때 오직 주님의 은혜임을 고백합니다.​반복되는 선율이 잔잔하게 마음을 어루만지며, 고백과 찬양이 자연스럽게 이어집니다. 바리톤의 깊은 울림이 곡의 감동을 더합니다.​나의 공로가 아닌 오직 주님의 은혜로 살아왔음을 고백하며, 끝없는 감사를 노래합니다.​

`,
      lyrics: `내 평생 살아온 길 뒤돌아보니
짧은 내 인생길 오직 주의 은혜라
내 평생 살아온 길 뒤돌아보니
짧은 내 인생길 오직 주의 은혜라

주의 은혜라 주의 은혜라 내 평생 살아온 길
주의 은혜라 주의 은혜라 다 함이 없는 사랑

달려갈 길 모두 마치고 주 얼굴볼 때
나는 공로 전혀 없도다 오직 주의 은혜라

지금까지 지내 온 것 주의 크신 은혜라
한이 없는 주의 사랑 어찌 이루말하랴
자나깨나 주의 손이 항상 살펴주시고
모든 일을 주안에서 형통하게 하시네

주의 은혜라 주의 은혜라 내 평생 살아온 길
주의 은혜라 주의 은혜라 다 함이 없는 사랑
주의 은혜라 주의 은혜라 내 평생 살아온 길
주의 은혜라 주의 은혜라 다 함이 없는 사랑

달려갈 길 모두 마치고 주 얼굴볼 때
나는 공로 전혀 없도다 오직 주의 은혜라
나는 공로 전혀 없도다 오직 주의 은혜라`,
    },
    {
      composer: '양재훈 편곡',
      songTitle: '예수를 나의 구주 삼고',
      performers: 'sop.김보미 / pf.홍영은',
      description: `이 곡은 크로스비가 작사하고 냅이 작곡한 찬송가 288장을 양재훈이 현대적 감성으로 재편곡했습니다. 원곡의 은혜를 살리면서 독창 무대에 맞게 다듬었습니다.​​      서정적인 선율이 경건한 분위기를 만들고, 후렴에서 점차 고조되는 흐름이 감동을 더합니다. 소프라노의 맑은 음색이 곡의 아름다움을 더욱 빛냅니다.​​ 예수님을 구주로 고백하는 확신과 기쁨이 담겨 있습니다. 예수님을 구주로 영접한 영혼이 누리는 하늘의 영광과 평안을 노래합니다.`,
      lyrics: `
예수를 나의 구주 삼고 성령과 피로써 거듭나니
이 세상에서 내 영혼이 하늘의 영광 누리도다

후렴
이것이 나의 간증이요 이것이 나의 찬송일세
나 사는 동안 끊임없이 구주를 찬송하리로다

온전히 주께 맡긴 내 영 사랑의 음성을 듣는 중에
천사들 왕래하는 것과 하늘의 영광 보리로다

주 안에 기쁨 누림으로 마음의 풍랑이 잔잔하니
세상과 나는 간 곳 없고 구속한 주만 보이도다`,
    },
    {
      composer: 'Jay Rouse arr.\nRecreated by 홍영은',
      songTitle: '나 같은 죄인 살리신',
      performers: 'bar.이원섭 / pf.홍영은',
      description: `존 뉴턴 목사가 노예 무역상에서 회심한 후 깊은 감격을 담아 작사한 찬송입니다. Jay Rouse가 전통적인 찬송가에 현대적 화성을 더해 새롭게 편곡했습니다.​​부드러운 선율이 점차 고조되며 감동을 더합니다. 바리톤의 따뜻한 음색이 깊은 감사를 전합니다.​​죄인을 구원하신 하나님의 놀라운 은혜와 감격을 고백합니다. 회심의 기쁨과 영원한 찬양의 마음을 담았습니다.​`,
      lyrics: `나 같은 죄인 살리신 주 은혜 크고 놀라워
잃었던 생명 찾았고 밝은 광명 나 얻었네 (우 -)

큰 죄악에서 건지신 주 은혜 크고 고마워
나 처음 믿은 그 시간 귀하고도 귀하도다

처음 그 시간 (아 -)

이제껏 내가 산 것도 주님의 크신 은혜라
또 나를 장차 본향에 인도하여 주시리라

크신 은혜 놀라워라 크신 은혜

거기서 우리 영원히 주님의 은혜로
해처럼 밝게 살면서 주 찬양하리라
주의 은혜 놀라워라`,
    },
  ];

  // 스크롤 위치 감지
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement;
      const isBottom = scrollTop + clientHeight >= scrollHeight - 20; // 20px 여유

      setShowScrollHint(!isBottom && scrollHeight > clientHeight);
    };

    // 초기 체크
    handleScroll();

    scrollElement.addEventListener('scroll', handleScroll);
    return () => scrollElement.removeEventListener('scroll', handleScroll);
  }, [isDialogOpen, selectedSong]);

  // 뒤로가기 버튼으로 모달 닫기 처리
  useEffect(() => {
    const handlePopState = () => {
      if (isDialogOpen) {
        setIsDialogOpen(false);
      }
    };

    if (isDialogOpen) {
      // 모달이 열릴 때 history state 추가
      window.history.pushState({ modalOpen: true }, '');

      // popstate 이벤트 리스너 등록
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isDialogOpen]);
  const handleLyricsClick = (item: ProgramItem) => {
    if (item.lyrics) {
      setSelectedSong(item);
      setIsDialogOpen(true);
    }
  };

  const handleDialogClose = (open: boolean) => {
    setIsDialogOpen(open);

    // 모달을 닫을 때 추가한 history state 제거
    if (!open && window.history.state?.modalOpen) {
      window.history.back();
    }
  };

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
        <div className="px-6 space-y-3">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Entire Content with Button on Right */}
              <div className="flex items-center justify-between gap-3">
                {/* Left Side: Song Info and Performers */}
                <div className="flex-1 space-y-2">
                  {/* Song Title and Composer */}
                  <div className="flex items-start gap-2">
                    <Music2 className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <h3 className="text-base text-gray-900 leading-snug">
                      {item.songTitle}
                      <span className="text-gray-600 text-xs ml-2">
                        ({item.composer})
                      </span>
                    </h3>
                  </div>

                  {/* Performers */}
                  <div className="pl-6">
                    <p className="text-gray-700 text-sm text-left">
                      {item.performers}
                    </p>
                  </div>
                </div>

                {/* Right Side: Lyrics Button */}
                {item.lyrics && (
                  <button
                    onClick={() => handleLyricsClick(item)}
                    className="inline-flex items-center justify-center px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors flex-shrink-0"
                    style={{ height: '3rem', width: '3rem' }}
                    aria-label="가사보기"
                  >
                    <FileText className="w-8 h-8" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Lyrics Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-md h-[90vh] p-3 gap-3 overflow-hidden flex flex-col">
          {/* Compact Header - 10% */}

          <div
            className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-3 py-2 flex-shrink-0"
            style={{ height: '7vh' }}
          >
            <div className="flex items-start gap-1.5 h-full">
              {/* Smaller Badge */}
              <div className="flex-shrink-0">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center shadow-sm">
                  <ListMusic className="w-2.5 h-2.5 text-emerald-700" />
                </div>
              </div>
              {/* Compact Title Section */}
              <div className="flex-1 min-w-0">
                <DialogTitle className="text-[14px] text-gray-900 leading-tight mb-0.5 pr-6">
                  {selectedSong?.songTitle} ({selectedSong?.composer})
                </DialogTitle>
                <DialogDescription className="text-[12px] text-gray-500 leading-tight">
                  {selectedSong?.performers}
                </DialogDescription>
              </div>
            </div>
          </div>

          {/* Song Description Section - 25% */}
          {selectedSong?.description && (
            <div
              className="px-3 py-2 overflow-y-auto flex-shrink-0"
              style={{ height: '22.5vh' }}
            >
              <div className="flex items-start gap-1.5">
                <div className="flex-shrink-0 mt-0.5">
                  <Info className="w-3 h-3 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] text-gray-700 leading-[1.5]">
                    {selectedSong.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          <Separator className="bg-emerald-100 flex-shrink-0" />

          {/* Lyrics Content - 65% */}
          <div className="relative flex-1" style={{ height: '58.5vh' }}>
            <div ref={scrollRef} className="h-full overflow-y-auto px-3 py-3">
              <div className="whitespace-pre-line text-[13px] text-gray-700 leading-[1.7] text-center pb-12">
                {selectedSong?.lyrics}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            {/* 스크롤 힌트 애니메이션 */}
            {showScrollHint && (
              <>
                {/* 하단 gradient 오버레이 */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none z-10" />{' '}
                <div className="flex items-center gap-0.5 text-emerald-500/70 animate-bounce">
                  {/* 스크롤 힌트 버튼 */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg border border-emerald-100">
                      <div className="flex flex-col items-center gap-1">
                        <ChevronDown className="w-4 h-4 text-emerald-600 animate-bounce" />
                        <span className="text-[10px] text-emerald-600 font-medium whitespace-nowrap">
                          더 보기
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
