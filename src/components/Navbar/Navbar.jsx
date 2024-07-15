import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

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
      // <Slide top>
      //   <div className={styles.navbar_container__mobile}>
      //     <Link className={styles.navbar_link__mobile} to="about" smooth="true" onClick={handleClick}>About</Link>
      //     <Link className={styles.navbar_link__mobile} to="skills" smooth="true" onClick={handleClick}>Skills</Link>
      //     <Link className={styles.navbar_link__mobile} to="projects" smooth="true" onClick={handleClick}>Work</Link>
      //     <Link className={styles.navbar_link__mobile} to="experience" smooth="true" onClick={handleClick}>Experience</Link>
      //     <Link className={styles.navbar_link__mobile} to="contact" smooth="true" onClick={handleClick}>Contact</Link>
      //   </div>
      // </Slide>

      <motion.div
        variants={slideInVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <div className={styles.navbar_container__mobile}>
          <Link className={styles.navbar_link__mobile} to="about" smooth="true" onClick={handleClick}>About</Link>
          <Link className={styles.navbar_link__mobile} to="skills" smooth="true" onClick={handleClick}>Skills</Link>
          <Link className={styles.navbar_link__mobile} to="projects" smooth="true" onClick={handleClick}>Work</Link>
          <Link className={styles.navbar_link__mobile} to="experience" smooth="true" onClick={handleClick}>Experience</Link>
          <Link className={styles.navbar_link__mobile} to="contact" smooth="true" onClick={handleClick}>Contact</Link>
        </div>
      </motion.div>
  }

  return (
    <section id="nav">
      <nav className={styles.navbar_container} role="navigation">
        <Link to='nav' className="pl-8 cursor-pointer">
          <img src={logo} alt="TJ" className="w-10 mx-auto" />
        </Link>
        <div className={styles.menu_toggle__wrapper}>
          <button className={styles.btn_menu__toggle} onClick={handleClick}>
            <span className="sr-only">Open main menu</span>
            <div className={styles.icon_wrapper}>
              <span aria-hidden="true" className={`${styles.icon_hmbrgr__line} ${styles.line_top} ${click ? styles.line_top__open : styles.line_top}`}></span>
              <span aria-hidden="true" className={`${styles.icon_hmbrgr__line} ${click ? 'opacity-0 ' : ''}`}></span>
              <span aria-hidden="true" className={`${styles.icon_hmbrgr__line} ${styles.line_bottom} ${click ? styles.line_bottom__open : styles.line_bottom}`}></span>
            </div>
          </button>
        </div>
        <div className={styles.navbar_link__wrapper}>
          <Link className={styles.navbar_link} to="about" smooth="true">About</Link>
          <Link className={styles.navbar_link} to="skills" smooth="true">Skills</Link>
          <Link className={styles.navbar_link} to="projects" smooth="true">Work</Link>
          <Link className={styles.navbar_link} to="experience" smooth="true">Experience</Link>
          <Link className={styles.navbar_link} to="contact" smooth="true">Contact</Link>
        </div>
      </nav>

      {/*Mobile menu*/}
      {menu}
    </section>
  );
};

export default Navbar;
