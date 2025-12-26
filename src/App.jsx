import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SOPDashboard from './components/SOPDashboard/SOPDashboard';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app_container ${isDarkMode ? 'dark' : 'light'}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="main_content">
        <SOPDashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
