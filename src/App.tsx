import './App.css';
import { NavBar } from './features';
import './i18n';
import { AppRouter } from './pages/router/AppRouter';
import { AppProvider } from './providers';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavBar />
      <AppRouter />
    </AppProvider>
  );
};

export default App;
