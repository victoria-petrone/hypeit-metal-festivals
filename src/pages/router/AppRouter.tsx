import { Route, Routes } from 'react-router-dom';
import { About } from '../About';
import { Home } from '../Home';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
