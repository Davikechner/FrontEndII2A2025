"use client";

import React from "react";
import Link from "next/link";
import styles from "./recurso.module.css";

const recursos = [
  {
    title: "Documentação Oficial do JavaScript",
    description: "Referência oficial da linguagem JavaScript pelo MDN Web Docs.",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    title: "JavaScript.info",
    description: "Um guia completo e moderno para aprender JavaScript do básico ao avançado.",
    url: "https://javascript.info/",
  },
  {
    title: "CodePen",
    description: "Ferramenta online para testar, editar e compartilhar código HTML, CSS e JS.",
    url: "https://codepen.io/",
  },
  {
    title: "FreeCodeCamp",
    description: "Curso completo e gratuito para aprender programação com foco em web.",
    url: "https://www.freecodecamp.org/",
  },
  {
    title: "ES6 Cheatsheet",
    description: "Resumo rápido das principais funcionalidades do ES6+.",
    url: "https://github.com/DrkSephy/es6-cheatsheet",
  },
  {
    title: "Exercism.io",
    description: "Pratique exercícios de JavaScript com feedback de mentores.",
    url: "https://exercism.io/tracks/javascript",
  },
];

const Recurso = () => {
  return (
    <main className={styles.main}>
      <div className={styles.navHome}>
        <Link href="/">Home</Link>
      </div>

      <section className={styles.header}>
        <h1>📚 Recursos Úteis</h1>
        <p>
          Explore materiais e ferramentas recomendadas para complementar seu aprendizado em JavaScript.
        </p>
      </section>

      <section className={styles.resourceGrid}>
        {recursos.map((item, index) => (
          <article key={index} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Acessar Recurso →
            </a>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Recurso;
