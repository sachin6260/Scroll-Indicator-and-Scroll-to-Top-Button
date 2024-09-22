import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle scroll event and calculate scroll progress
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);

    // Show "Scroll to Top" button after scrolling 200px
    setShowScrollTopButton(winScroll > 200);

    // Determine the active section based on scroll position
    const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
    let currentSection = sections.find(section => {
      const element = document.getElementById(section);
      return window.scrollY >= element.offsetTop - 50 && window.scrollY < element.offsetTop + element.offsetHeight - 50;
    });
    setActiveSection(currentSection);
  };

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll smoothly to a section when clicking a navbar link
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li className={activeSection === 'services' ? 'active' : ''}>
            <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
          </li>
          <li className={activeSection === 'portfolio' ? 'active' : ''}>
            <a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a>
          </li>
          <li className={activeSection === 'testimonials' ? 'active' : ''}>
            <a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </li>
        </ul>
      </nav>

      {/* Scroll Indicator with Tooltip */}
      <div className="scroll-indicator-container" title={`${Math.round(scrollTop)}%`}>
        <div className="scroll-indicator" style={{ width: `${scrollTop}%` }}></div>
      </div>

      {/* Scroll-to-Top Button */}
      {showScrollTopButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* Dummy Content */}
      <div className="content">
        <section id="home">
          <h2>Home</h2>
          <p>Welcome to the home section! Scroll down to explore more.</p>
        </section>

        <section id="about">
          <h2>About</h2>
          <p>This is the about section. Learn more about us here.</p>
        </section>

        <section id="services">
          <h2>Services</h2>
          <p>We offer a wide range of services. Check them out below.</p>
          <ul>
            <li>Service 1: Web Development</li>
            <li>Service 2: Mobile App Development</li>
            <li>Service 3: Digital Marketing</li>
            <li>Service 4: SEO Optimization</li>
          </ul>
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          <p>Here are some of our recent projects:</p>
          <ul>
            <li>Project 1: E-commerce Website</li>
            <li>Project 2: Social Media App</li>
            <li>Project 3: Portfolio Website</li>
            <li>Project 4: Task Management System</li>
          </ul>
        </section>

        <section id="testimonials">
          <h2>Testimonials</h2>
          <p>Here’s what our clients say:</p>
          <blockquote>"Amazing work! Highly recommended."</blockquote>
          <blockquote>"The team delivered on time and exceeded our expectations."</blockquote>
          <blockquote>"Professional, efficient, and great communication!"</blockquote>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Get in touch with us through this contact section.</p>
          <p>Email: contact@company.com</p>
          <p>Phone: +123 456 7890</p>
        </section>

        <section>
          <h2>More Content</h2>
          <p>Scroll down for more content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.</p>
        </section>
      </div>
    </>
  );
};

export default ScrollIndicator;
