import MainImage from './components/MainImage/MainImage.js';
import InfoContainer from './components/InfoContainer/InfoContainer.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import SocialLinks from './components/SocialLinks/SocialLinks.js';
import { info } from './constants/info.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <MainImage />
      <InfoContainer>
        <AboutMe
          name={info.name}
          shortDescription={info.shortDescription}
          longDescription={info.longDescription}
        />
        <SocialLinks links={info.socialLinks} />
      </InfoContainer>
    </div>
  );
}

export default App;
