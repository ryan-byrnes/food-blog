// src/app/pages/index.tsx

import React from 'react';
import NavBar from '@/components/navbar';
import RecentRecipes from '@/components/recent-recipes';
import About from '@/components/about-me';

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <RecentRecipes />
      </div>
      <div>
        <About />
      </div>
    </>
  );
};

export default HomePage;

