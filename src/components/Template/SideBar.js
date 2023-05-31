import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ismail Enes Yigit, PhD</h2>
        <p><a href="mailto:ismail@enesyigit.com">ismail@enesyigit.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Enes. I am a <a href="https://www.ku.edu.tr/en/">Koc University</a> Mechanical Engineering
        PhD graduate. I am a Software Engineer and researcher
        with a strong academic and multidisciplinary background.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ismail Enes Yigit <Link to="/">enesyigit.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
