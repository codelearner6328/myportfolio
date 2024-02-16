import React, { useState, useEffect, useRef, ReactHTMLElement } from 'react'
import NameSeperator from '../components/NameSeperator';
const Header = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const [mobileMenuToggler, setMobileMenuToggler] = useState(false);
  const header: any = useRef(null);

  useEffect(() => {

    document.addEventListener('scroll', () => {
      var scroll_position = window.scrollY;
      if (scroll_position > 250) {

        header.current.style.backgroundColor = '#29323c';

      }
      else {
        if (header.current) {
          header.current.style.backgroundColor = 'transparent';
        }
      }
    });
    // cleanup this component
    return () => {
      document.removeEventListener('scroll', () => {
      });
    };
  }, []);

  return (
    <section id="header">
      <div className="header container" ref={header}>
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              {/* <h1><span>M</span>uhammad <span>Z</span>ubair</h1> */}
              <NameSeperator name="Code Learner" />
            </a>
          </div>
          <div className="nav-list">
            <div className={toggleHamburger ? "hamburger active" : "hamburger"} onClick={() => { setToggleHamburger(!toggleHamburger); setMobileMenuToggler(!mobileMenuToggler) }}>
              <div className="bar" />
            </div>
            <ul className={mobileMenuToggler ? "active" : ""}>
              <li><a href="#hero" data-after="Home" onClick={() => { setToggleHamburger(!toggleHamburger); setMobileMenuToggler(!mobileMenuToggler) }}>Home</a></li>
              <li><a href="#services" data-after="Services" onClick={() => { setToggleHamburger(!toggleHamburger); setMobileMenuToggler(!mobileMenuToggler) }}>Services</a></li>
              <li><a href="#projects" data-after="Projects" onClick={() => { setToggleHamburger(!toggleHamburger); setMobileMenuToggler(!mobileMenuToggler) }}>Projects</a></li>
              <li><a href="#about" data-after="About" onClick={() => { setToggleHamburger(!toggleHamburger); setMobileMenuToggler(!mobileMenuToggler) }}>About</a></li>
              <li><a href="#contact " data-after="Contact" onClick={() => { setToggleHamburger(!toggleHamburger); setMobileMenuToggler(!mobileMenuToggler) }}>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Header;
