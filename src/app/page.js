"use client";

import React, { useState, useEffect } from "react";
import styles from "./style.module.css";


const recursos = [
  {
    id: 1,
    title: "Aulas Interativas",
    description: "Vídeos e exercícios práticos para fixar o conteúdo.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Comunidade",
    description: "Participe do fórum e tire dúvidas com outros alunos.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Projetos Reais",
    description: "Desenvolva projetos que você poderá mostrar no seu portfólio.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
];

const depoimentos = [
  {
    id: 1,
    name: "Maria Silva",
    text: "Esse curso mudou minha vida! Agora consigo criar aplicações reais e tenho mais confiança.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "João Pedro",
    text: "A didática é incrível, o conteúdo é bem explicado e os exercícios ajudam muito.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Ana Paula",
    text: "Recomendo para todos que querem começar do zero com JavaScript e realmente aprender.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

export default function Home() {
  // Controle do depoimento atual
  const [currentDepoimento, setCurrentDepoimento] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDepoimento((prev) => (prev + 1) % depoimentos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.container}>

      {/* Hero */}
      <section className={styles.hero} id="hero">
        <h1 className={styles.title}>Curso de JavaScript do Zero</h1>
        <p className={styles.paragraph}>
          Este curso é ideal para quem nunca teve contato com programação ou deseja aprender JavaScript do básico ao avançado.
        </p>
        <p className={styles.paragraph}>
          Vamos começar entendendo os fundamentos da linguagem, como variáveis, funções, estruturas de controle e manipulação do DOM.
        </p>
        <p className={styles.paragraph}>
          Com aulas práticas e exercícios, você vai evoluir até criar seus próprios projetos.
        </p>
        <p className={styles.paragraph}>
          Prepare-se para dominar uma das linguagens mais usadas na web!
        </p>
        <button className={styles.ctaButton}>Inscreva-se Agora</button>
      </section>

      {/* Recursos */}
      <section className={styles.recursosSection} id="recursos">
        <h2 className={styles.subtitle}>O que você vai encontrar no curso</h2>
        <div className={styles.cardsContainer}>
          {recursos.map(({ id, title, description, img }) => (
            <div key={id} className={styles.card}>
              <img src={img} alt={title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className={styles.depoimentosSection} id="depoimentos">
        <h2 className={styles.subtitle}>Depoimentos de alunos</h2>
        <div className={styles.depoimentoCard}>
          <img
            src={depoimentos[currentDepoimento].avatar}
            alt={depoimentos[currentDepoimento].name}
            className={styles.avatar}
          />
          <p className={styles.depoimentoText}>
            “{depoimentos[currentDepoimento].text}”
          </p>
          <h4 className={styles.depoimentoName}>{depoimentos[currentDepoimento].name}</h4>
        </div>
      </section>


      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 - Curso JS Iniciante</p>
          
      </footer>

    </main>
  );
}
