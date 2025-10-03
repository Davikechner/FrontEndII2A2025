'use client';
import { useState } from 'react';
import Header from './style.module.css';
import Hero from '../components/Hero';
import styles from './Home.module.css';

export default function Home() {
  const [contador, setContador] = useState(0);

  const missoes = [
    { img: '/images/mission1.jpg', title: 'Apollo 11', description: 'Primeira missão que levou humanos à Lua em 1969.' },
    { img: '/images/mission2.jpg', title: 'ISS', description: 'Laboratório orbital internacional em operação desde 2000.' },
    { img: '/images/mission3.jpg', title: 'Mars Rover', description: 'Robôs exploradores que estudam a superfície de Marte.' }
  ];

  const astronautas = [
    { img: '/images/astronaut1.jpg', title: 'Neil Armstrong', description: 'Primeiro homem a pisar na Lua em 1969.' },
    { img: '/images/astronaut2.jpg', title: 'Yuri Gagarin', description: 'Primeiro humano no espaço em 1961.' },
    { img: '/images/astronaut3.jpg', title: 'Sally Ride', description: 'Primeira mulher americana no espaço em 1983.' }
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <Hero contador={contador} setContador={setContador} />

        {/* Missões */}
        <section className={styles.section}>
          <h3>Missões Espaciais</h3>
          <div className={styles.cards}>
            {missoes.map((m, i) => (
              <div key={i} className={styles.card}>
                <img src={m.img} alt={m.title} />
                <h4>{m.title}</h4>
                <p>{m.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Astronautas */}
        <section className={styles.section}>
          <h3>Astronautas Famosos</h3>
          <div className={styles.cards}>
            {astronautas.map((a, i) => (
              <div key={i} className={styles.card}>
                <img src={a.img} alt={a.title} />
                <h4>{a.title}</h4>
                <p>{a.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pequena Galeria */}
        <section className={styles.section}>
          <h3>Galeria Espacial</h3>
          <div className={styles.gallery}>
            <img src="/images/space1.jpg" alt="Nebulosa" />
            <img src="/images/space2.jpg" alt="Planeta" />
            <img src="/images/space3.jpg" alt="Via Láctea" />
          </div>
        </section>
      </main>
    </div>
  );
}
