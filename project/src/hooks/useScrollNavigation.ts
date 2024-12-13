import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToElement, getActiveSection } from '../utils/scrollUtils';

export const useScrollNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    scrollToElement(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'blog', 'people'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const activeSection = getActiveSection(sections, scrollPosition);
      
      const path = activeSection === 'home' ? '/' : `/${activeSection}`;
      if (location.pathname !== path) {
        navigate(path, { replace: true });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, navigate]);

  useEffect(() => {
    const sectionId = location.pathname.slice(1) || 'home';
    scrollToSection(sectionId);
  }, []);

  return { scrollToSection };
};