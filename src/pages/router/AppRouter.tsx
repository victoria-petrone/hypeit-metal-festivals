import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FestivalDetail } from '../FestivalDetail';
import { Home } from '../Home';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id" element={<FestivalDetail />} />
    </Routes>
  );
};
