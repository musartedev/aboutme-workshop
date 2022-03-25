import './AboutMe.css';

const AboutMe = ({ name, longDescription, shortDescription }) => {
  return (
    <section className='AboutMe'>
      <h1 className='AboutMe-title'>{name}</h1>
      <p className='AboutMe-shortDescription'>{shortDescription}</p>
      <p className='AboutMe-longDescription'>{longDescription}</p>
    </section>
  );
};

export default AboutMe;
