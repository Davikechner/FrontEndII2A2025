'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className={styles.headerMobile}>
        <div onClick={() => setMenuOpen(!menuOpen)} className={styles.menuBtn}>
          <Image
            src={menuOpen ? '/images/close.png' : '/images/open.png'}
            alt="Menu"
            width={30}
            height={30}
          />
        </div>
        {menuOpen && (
          <nav className={styles.mobileNav}>
            <ul className={styles.ulMenu}>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/missoes">Missões</Link></li>
              <li><Link href="/tripulacao">Astronautas</Link></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Desktop Header */}
      <header className={styles.header}>
        <nav>
          <ul className={styles.ulMenu}>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/missoes">Missões</Link></li>
            <li><Link href="/tripulacao">Astronautas</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
