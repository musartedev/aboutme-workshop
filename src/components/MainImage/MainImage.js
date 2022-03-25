import profilePhoto from '../../images/profile.jpeg';
import './MainImage.css';

const MainImage = () => {
  return (
    <img className='MainImage' src={profilePhoto} alt='Mariangélica Useche' />
  );
};

export default MainImage;
