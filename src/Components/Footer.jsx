import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as GamerVox } from '../Assets/control-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <GamerVox />
      <p>GamerVox. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
