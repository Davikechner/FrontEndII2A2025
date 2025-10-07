"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./aulas.module.css";

const lessonsData = [
  {
    id: 1,
    title: "Introdução ao JavaScript",
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
    description: "Entenda o que é JavaScript, sua história e aplicações.",
  },
  {
    id: 2,
    title: "Variáveis e Tipos de Dados",
    videoUrl: "https://www.youtube.com/embed/Bv_5Zv5c-Ts",
    description: "Aprenda sobre var, let, const, e os principais tipos de dados em JS.",
  },
  {
    id: 3,
    title: "Funções e Escopos",
    videoUrl: "https://www.youtube.com/embed/iLx4ma8ZqvQ",
    description: "Como criar e usar funções, além de entender escopos em JavaScript.",
  },
];

const Aulas = () => {
  const [currentLesson, setCurrentLesson] = useState(lessonsData[0]);
  const [completedLessons, setCompletedLessons] = useState([]);

  const markAsDone = (id) => {
    if (!completedLessons.includes(id)) {
      setCompletedLessons([...completedLessons, id]);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.navHome}>
        <Link href="/">Home</Link>
      </div>

      <section className={styles.container}>
        <aside className={styles.sidebar}>
          <h2>Módulos</h2>
          <ul>
            {lessonsData.map((lesson) => (
              <li
                key={lesson.id}
                onClick={() => setCurrentLesson(lesson)}
                className={lesson.id === currentLesson.id ? styles.active : ""}
              >
                {lesson.title}
                {completedLessons.includes(lesson.id) && (
                  <span className={styles.check}>✔</span>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <div className={styles.content}>
          <h1>{currentLesson.title}</h1>
          <div className={styles.videoWrapper}>
            <iframe
              width="100%"
              height="400"
              src={currentLesson.videoUrl}
              title={currentLesson.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className={styles.description}>{currentLesson.description}</p>
          <button
            className={styles.doneButton}
            onClick={() => markAsDone(currentLesson.id)}
          >
            Marcar como concluída
          </button>
        </div>
      </section>
    </main>
  );
};

export default Aulas;
