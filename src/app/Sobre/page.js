"use client";

import React from "react";
import Link from 'next/link';
import styles from "./sobre.module.css";

const About = () => {
  return (
    <main className={styles.main}>
      {/* Link para voltar para Home */}
      <div className={styles.navHome}>
        <Link href="/">Home</Link>
      </div>

      <section className={styles.hero}>
        <div className={styles.text}>
          <h1 className={styles.title}>Sobre o Curso de JavaScript</h1>
          <p className={styles.paragraph}>
            Nosso curso foi criado para você que deseja começar do zero e dominar JavaScript, a linguagem mais popular da web. Aprenda desde os fundamentos básicos até técnicas avançadas para construir aplicações modernas, eficientes e escaláveis.
          </p>
          <p className={styles.paragraph}>
            Com uma abordagem prática e voltada para o mercado, o curso cobre tópicos essenciais como manipulação do DOM, programação assíncrona, APIs, ES6+, frameworks modernos, entre outros. Tudo com exemplos reais para tornar o aprendizado dinâmico e eficaz.
          </p>
          <p className={styles.paragraph}>
            Seja para iniciar uma carreira em desenvolvimento web, aprimorar suas habilidades ou migrar para a programação, este curso é seu ponto de partida ideal para alcançar o sucesso profissional.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Programador aprendendo JavaScript"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>

      <section className={styles.cardsSection}>
        <article className={styles.card}>
          <h2>👨‍🏫 Instrutores Qualificados</h2>
          <p>
            Professores experientes do mercado, trazendo cases reais e disponíveis para apoiar seu aprendizado a cada etapa.
          </p>
          <p>
            Nosso time é apaixonado por ensinar e garantir que você aprenda as melhores práticas e novidades do JavaScript.
          </p>
        </article>

        <article className={styles.card}>
          <h2>💡 Aprendizado Prático e Projetos Reais</h2>
          <p>
            Faça projetos que simulam desafios reais do dia a dia de um desenvolvedor, ajudando você a consolidar o conteúdo e montar um portfólio relevante.
          </p>
          <p>
            Exercícios práticos garantem seu domínio total antes de avançar para o próximo módulo.
          </p>
        </article>

        <article className={styles.card}>
          <h2>🌐 Comunidade e Suporte</h2>
          <p>
            Participe de uma comunidade ativa, troque experiências, tire dúvidas e receba feedbacks em grupo e diretamente dos instrutores.
          </p>
        </article>

        <article className={styles.card}>
          <h2>📈 Atualização Constante</h2>
          <p>
            Conteúdo sempre atualizado com as últimas funcionalidades do JavaScript e melhores práticas do mercado.
          </p>
          <p>
            Você estará sempre preparado para as demandas reais da profissão.
          </p>
        </article>
      </section>

      <section className={styles.testimonials}>
        <h2>O que nossos alunos dizem</h2>
        <blockquote className={styles.testimonial}>
          "Este curso mudou minha carreira! A didática é excelente e os projetos são super relevantes para o mercado atual." - <strong>Mariana S.</strong>
        </blockquote>
        <blockquote className={styles.testimonial}>
          "Com os instrutores sempre prontos para ajudar, consegui superar todas as dificuldades e já estou trabalhando como dev!" - <strong>Lucas P.</strong>
        </blockquote>
      </section>

      <section className={styles.faqSection}>
        <h2>Perguntas Frequentes</h2>
        <details className={styles.faqItem}>
          <summary>Qual o nível necessário para iniciar o curso?</summary>
          <p>Não é necessário conhecimento prévio em programação. O curso começa do zero e vai até conteúdos avançados.</p>
        </details>
        <details className={styles.faqItem}>
          <summary>O curso possui certificado?</summary>
          <p>Sim! Ao concluir todas as aulas e projetos, você receberá um certificado digital reconhecido pelo mercado.</p>
        </details>
        <details className={styles.faqItem}>
          <summary>Posso tirar dúvidas com os instrutores?</summary>
          <p>Sim, temos suporte direto via fórum e sessões ao vivo para tirar todas as suas dúvidas.</p>
        </details>
      </section>
    </main>
  );
};

export default About;
