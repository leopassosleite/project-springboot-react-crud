import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaGithub />
                </li>
                <li>
                    <FaWhatsapp />
                </li>
            </ul>
            <p className={styles.copy_right}><span>XBarts</span> &copy; 2022</p>
        </footer>
    )
}

export default Footer