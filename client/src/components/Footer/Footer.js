import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <p>
        © 2021 | Samvaad | Made with React |{' '}
        <a
          href='https://github.com/ab-abhi-1303'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
