import React from 'react';
import styles from "./homepage.module.css";

const Footer = ({ footerText }) => (
    <footer className={styles.footer}>
        <p>
            {footerText}
        </p>
    </footer>
);

export default Footer;