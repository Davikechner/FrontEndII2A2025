'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize(); // chama ao montar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Links atualizados para site de curso JS
  const navLinks = [
    { href: '/Sobre', label: 'Sobre o Curso' },
    { href: '/Aulas', label: 'Aulas' },
    { href: '/Recurso', label: 'Recursos' },
  ];

  return (
    <>
      {isMobile ? (
        <header className={styles.headerMobile}>
          <div className={styles.mobileTop}>
            <h1 className={styles.logo}>JS Mastery 💻</h1>
            <button
              className={styles.menuBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label="Alternar menu"
            >
              <Image
                src={menuOpen ? '/images/close.png' : '/images/open.png'}
                alt="Ícone do menu"
                width={30}
                height={30}
              />
            </button>
          </div>
          <nav
            id="mobile-nav"
            className={`${styles.mobileNav} ${menuOpen ? styles.open : ''}`}
          >
            <ul>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      ) : (
        <header className={styles.header}>
          <h1 className={styles.logo}>JS Mastery 💻</h1>
          <nav>
            <ul className={styles.ulMenu}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}
