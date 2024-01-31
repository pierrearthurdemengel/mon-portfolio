import Slider from 'react-slick';

function Skills() {

  // Paramètres de configuration pour le Slider
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 8, // Ajustez en fonction de la taille de votre conteneur
    slidesToScroll: 2, // Peut-être mieux de défiler un par un
    responsive: [
      {
        breakpoint: 1024, // Pour les écrans plus larges
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600, // Pour les écrans de taille moyenne
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // Pour les petits écrans
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <section id="skills">
      <h2>Compétences Techniques</h2>
      <Slider {...settings}>
        <div><img src="/html5.png" alt="HTML5" /></div>
        <div><img src="/CSS3.webp" alt="CSS3" /></div>
        <div><img src="/javascript.png" alt="JavaScript" /></div>
        <div><img src="/php.png" alt="PHP8" /></div>
        <div><img src="/SQL.png" alt="SQL" /></div>
        <div><img src="/symfony.png" alt="Symfony" /></div>
        <div><img src="/react.png" alt="React" /></div>
        <div><img src="/solidity.png" alt="Solidity" /></div>
        <div><img src="/seo.svg" alt="SEO" /></div>
        <div><img src="/uxui.png" alt="UI/UX" /></div>
      </Slider> 
    </section>
  );
  
  }
  
  export default Skills;

  