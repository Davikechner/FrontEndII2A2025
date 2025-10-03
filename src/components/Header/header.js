'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <header className={styles.headerMobile}>
          <div className={styles.mobileTop}>
            <h1 className={styles.logo}>GaláxiaX 🚀</h1>
            <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
              <Image
                src={menuOpen ? '/images/close.png' : '/images/open.png'}
                alt="Menu"
                width={30}
                height={30}
              />
            </div>
          </div>
          <nav
            className={`${styles.mobileNav} ${menuOpen ? styles.open : ''}`}
          >
            <ul>
              <li><Link href="#sobre">Sobre</Link></li>
              <li><Link href="#missao">Missões</Link></li>
              <li><Link href="#astronautas">Astronautas</Link></li>
              <li><Link href="#galeria">Galeria</Link></li>
              <li><Link href="#contato">Contato</Link></li>
            </ul>
          </nav>
        </header>
      ) : (
        <header className={styles.header}>
          <h1 className={styles.logo}>GaláxiaX 🚀</h1>
          <nav>
            <ul className={styles.ulMenu}>
              <li><Link href="#sobre">Sobre</Link></li>
              <li><Link href="#missao">Missões</Link></li>
              <li><Link href="#astronautas">Astronautas</Link></li>
              <li><Link href="#galeria">Galeria</Link></li>
              <li><Link href="#contato">Contato</Link></li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}
