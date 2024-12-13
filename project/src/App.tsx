import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import People from './pages/People';
import { useScrollNavigation } from './hooks/useScrollNavigation';

function App() {
  const { scrollToSection } = useScrollNavigation();

  return (
    <Layout>
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="portfolio" className="min-h-screen">
        <Portfolio />
      </section>
      <section id="blog" className="min-h-screen">
        <Blog />
      </section>
      <section id="people" className="min-h-screen">
        <People />
      </section>
    </Layout>
  );
}

export default App;