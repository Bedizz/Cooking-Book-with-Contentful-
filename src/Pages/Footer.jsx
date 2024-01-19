import React from 'react';
import styles from "./homepage.module.css";

const Footer = ({ footerText }) => (
    <footer className={styles.footer}>
        <p>
            {footerText || "Explore more recipes in our cookbook and bring the flavors of Turkey and Spain to your kitchen!"}
        </p>
    </footer>
);

export default Footer;