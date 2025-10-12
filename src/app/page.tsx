'use client';

import { useState, useRef, useEffect } from 'react';
import { BottomNavigation } from './components/BottomNavigation';
import { HomePage } from './components/pages/HomePage';
import { ConcertInfoPage } from './components/pages/ConcertInfoPage';
import { ProgramPage } from './components/pages/ProgramPage';
import { LocationPage } from './components/pages/LocationPage';
import { ShareSection } from './components/ShareSection';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    home: null,
    info: null,
    program: null,
    location: null,
    share: null,
  });

  const concertData = {
    title: '주님과 함께 걷는 길은',
    subtitle: '제5회 새로핌 교회음악 페스티벌 연주회',
    organizer: '새문안교회 새로핌찬양대',
    concertDate: '2025년 10월 18일(토)',
    concertTime: '오후 3시',
    venue: '대한예수교장로회 새문안교회',
    venueDetail: '새문안교회 1층 새문안홀',
    venueAddress: '서울특별시 종로구 새문안로 79',
    venueImage:
      'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191207_200%2F1575645003467FPzEl_JPEG%2Fy7NcXhRAN3M-rgQCsjWM4WE0.jpg',
  };

  // Handle scroll to update active tab
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop + window.innerHeight / 2;

      // Find which section is currently in view
      const sections = Object.entries(sectionsRef.current);
      for (const [key, element] of sections) {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(key);
            break;
          }
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle tab change to scroll to section
  const handleTabChange = (tab: string) => {
    const element = sectionsRef.current[tab];
    if (element && scrollContainerRef.current) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTab(tab);
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="h-full overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory"
      >
        {/* Home Section */}
        <section
          ref={(el) => {
            sectionsRef.current.home = el;
          }}
          className="min-h-screen snap-start"
        >
          <HomePage
            title={concertData.title}
            subtitle={concertData.subtitle}
            organizer={concertData.organizer}
            concertDate={concertData.concertDate}
            concertTime={concertData.concertTime}
            venueDetail={concertData.venueDetail}
          />
        </section>

        {/* Concert Info Section */}
        <section
          ref={(el) => {
            sectionsRef.current.info = el;
          }}
          className="min-h-screen snap-start"
        >
          <ConcertInfoPage
            title={concertData.title}
            subtitle={concertData.subtitle}
            organizer={concertData.organizer}
          />
        </section>

        {/* Program Section */}
        <section
          ref={(el) => {
            sectionsRef.current.program = el;
          }}
          className="min-h-screen snap-start"
        >
          <ProgramPage />
        </section>

        {/* Location Section */}
        <section
          ref={(el) => {
            sectionsRef.current.location = el;
          }}
          className="min-h-screen snap-start"
        >
          <LocationPage
            venue={concertData.venue}
            venueAddress={concertData.venueAddress}
            imageUrl={concertData.venueImage}
          />
        </section>

        {/* Share Section */}
        <section
          ref={(el) => {
            sectionsRef.current.share = el;
          }}
          className="snap-start"
        >
          <ShareSection title={concertData.title} />
        </section>
      </div>

      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
