import './SocialLinks.css';

const SocialLinks = ({ links }) => {
  return (
    <section className='SocialLinks'>
      <ul className='SocialLinks-list'>
        {links.map((link) => {
          return (
            <li className='SocialLinks-item' key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SocialLinks;
