import React from 'react';
import ProjectList from './components/ProjectList';
import styles from "./style/homepage.module.css"

export default function HomePage () {
  return (
    <main>
      <section>
        <h1 className={styles.title} id='intro'>
          <span>Hi, I&apos;m</span> <span>Zdeněk Barth</span>
        </h1>
        <h1 className={styles.title}>
          <span>Full Stack</span> <span>Web Developer</span>
        </h1>
        <br />
        <p>
          Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a knihařském průmyslu. Lorem Ipsum je
          považováno za standard v této oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal kusy textu a na
          jejich základě vytvořil speciální vzorovou knihu.
        </p>
        <p>
          Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny.
        </p>
        <hr></hr>
      </section>
      <ProjectList />
    </main>
  );
};