import React from 'react';

function About() {
  return (
    <section id="about" style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
      <h2>À propos de moi</h2>
      <div style={{ display: 'flex', alignItems: 'left' }}>
        <img src="/MaPhoto.jpg" alt="Ma Photo" style={{ width: '150px', borderRadius: '50%' }} />
        <div>
          <h3>Développeur web junior</h3>
          <p>J'ai développé mes compétences en développement informatique à travers les langages JavaScript, PHP et leurs frameworks Symfony et React.js à travers divers projets personnels. 
            J'aime explorer de nouvelles technologies et travailler sur des projets innovants qui apportent de véritables solutions aux problèmes du monde actuel.
            J'adore me confronter à de nouveaux problèmes même si j'apprécie particulièrement les résoudre.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
