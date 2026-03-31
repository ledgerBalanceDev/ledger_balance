import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';
import logo from '../../assets/logoLB.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleSectionScroll = () => {
      const sections = ['home', 'services', 'our-process', 'contact'];
      let currentSection = 'home';

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  const navigationItems = [
    { name: 'Home', sectionId: 'home' },
    { name: 'Services', sectionId: 'services' },
    { name: 'Our Process', sectionId: 'our-process' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-normal ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-brand border-b border-border shadow-brand-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-brand">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center space-x-3 group transition-all duration-normal hover:scale-105 cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-brand-strong rounded-lg flex items-center justify-center shadow-brand">
                <img src={logo} alt="Ledeger Balance" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-montserrat font-brand-bold text-foreground">    
                LEDGER BALANCE
              </h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <button
                key={item?.sectionId}
                onClick={() => scrollToSection(item?.sectionId)}
                className={`relative px-3 py-2 text-sm font-brand-medium transition-all duration-normal hover:text-primary group cursor-pointer bg-transparent border-none ${
                  activeSection === item?.sectionId
                    ? 'text-primary' :'text-foreground hover:text-primary'
                }`}
              >
                {item?.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-all duration-normal ${
                    activeSection === item?.sectionId 
                      ? 'scale-x-100' :'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-normal focus-ring"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-foreground"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-normal overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-full opacity-100' :'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-border bg-foreground bg-background/95 backdrop-blur-brand">
            <div className="space-y-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.sectionId}
                  onClick={() => scrollToSection(item?.sectionId)}
                  className={`block w-full text-left px-4 py-3 text-base text-white font-brand-medium transition-all duration-normal hover:bg-muted hover:text-primary cursor-pointer border-none bg-transparent ${
                    activeSection === item?.sectionId
                      ? 'text-primary bg-primary/5 border-r-2 border-primary' :'text-foreground'
                  }`}
                >
                  {item?.name}
                </button>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="px-4 pt-4 space-y-3 border-t border-border mt-4 text-white">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Us
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;