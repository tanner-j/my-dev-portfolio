import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';
import { motion } from 'framer-motion';
import './Navbar.scss'

const slideInVariants = {
  hidden: {
    y: '-100%',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: { 
    y: '100%', 
    opacity: 0,
  },
};

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const navbarContainer = `navbar-container${!isVisible ? ' nav-hidden' : ''}`;
  const topLine = `icon-hmbrgr--line line-top${click ? ' line-top--open' : ' line-top'}`;
  const midLine = `icon-hmbrgr--line${click ? ' opacity-0 ' : ''}`;
  const bottomLine = `icon-hmbrgr--line line-bottom${click ? ' line-bottom--open' : ' line-bottom'}`;

  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        //Scroll down
        setIsVisible(false);
      } else {
        //Scroll up
        setIsVisible(true);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick() {
    setClick(!click);
    handleMenu();
  }

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  let menu

  if (showMenu) {
    menu =
      <motion.div
        variants={slideInVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <div className='navbar-container--mobile'>
          <Link className='navbar-link--mobile mt-20' to="about" smooth="true" onClick={handleClick}>About</Link>
          <Link className='navbar-link--mobile' to="skills" smooth="true" onClick={handleClick}>Skills</Link>
          <Link className='navbar-link--mobile' to="projects" smooth="true" onClick={handleClick}>Work</Link>
          <Link className='navbar-link--mobile' to="experience" smooth="true" onClick={handleClick}>Experience</Link>
          <Link className='navbar-link--mobile' to="contact" smooth="true" onClick={handleClick}>Contact</Link>
        </div>
      </motion.div>
  }

  return (
    <section id="nav">
      <nav className={navbarContainer} role="navigation">
        <Link to='nav' className="pl-8 cursor-pointer">
          <img src={logo} alt="TJ" className="w-10 mx-auto" />
        </Link>
        <div className='menu-toggle--wrapper'>
          <button className='btn-menu--toggle' onClick={handleClick}>
            <span className="sr-only">Open main menu</span>
            <div className='icon-wrapper'>
              <span aria-hidden="true" className={topLine}></span>
              <span aria-hidden="true" className={midLine}></span>
              <span aria-hidden="true" className={bottomLine}></span>
            </div>
          </button>
        </div>
        <div className='navbar-link--wrapper'>
          <Link className='navbar-link' to="about" smooth="true">About</Link>
          <Link className='navbar-link' to="skills" smooth="true">Skills</Link>
          <Link className='navbar-link' to="projects" smooth="true">Work</Link>
          <Link className='navbar-link' to="experience" smooth="true">Experience</Link>
          <Link className='navbar-link' to="contact" smooth="true">Contact</Link>
        </div>
      </nav>

      {/*Mobile menu*/}
      {menu}
    </section>
  );
};

export default Navbar;
