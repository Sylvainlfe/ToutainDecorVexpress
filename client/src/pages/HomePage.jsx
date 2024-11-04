import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import NewsProjectsSection from '../components/NewsProjectsSection'
import { useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <main>
      <HeroSection />
      <NewsProjectsSection />
    </main>
  )
}

export default HomePage