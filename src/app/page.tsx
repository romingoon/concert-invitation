'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BottomNavigation } from './components/BottomNavigation';
import { HomePage } from './components/pages/HomePage';
import { ConcertInfoPage } from './components/pages/ConcertInfoPage';
import { ProgramPage } from './components/pages/ProgramPage';
import { LocationPage } from './components/pages/LocationPage';

export default function Page() {
  const [activeTab, setActiveTab] = useState('home');

  const concertData = {
    artistName: '새로핌 교회음악 페스티벌 연주회',
    concertDate: '2025년 10월 18일 (토)',
    concertTime: '오후 3시',
    venue: '새문안교회 1층 새문안홀',
    venueAddress: '서울특별시 종로구 새문안로 79 (신문로1가)',
    heroImage:
      'https://images.unsplash.com/photo-1584000166179-d95db66ac613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBtdXNpYyUyMGNvbmNlcnQlMjBwb3N0ZXJ8ZW58MXx8fHwxNzU5Njk5NjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    venueImage:
      'https://images.unsplash.com/photo-1595317428853-7d4b208b7192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMGNvbmNlcnQlMjBoYWxsfGVufDF8fHx8MTc1OTc4NzY2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  };

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            artistName={concertData.artistName}
            concertDate={concertData.concertDate}
            concertTime={concertData.concertTime}
            imageUrl={concertData.heroImage}
          />
        );
      case 'info':
        return (
          <ConcertInfoPage
            artistName={concertData.artistName}
            imageUrl={concertData.heroImage}
          />
        );
      case 'program':
        return <ProgramPage />;
      case 'location':
        return (
          <LocationPage
            venue={concertData.venue}
            venueAddress={concertData.venueAddress}
            imageUrl={concertData.venueImage}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="size-full overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
