import { h, Component } from 'preact';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faMedium,
  faTwitter,
  faGithub,
} from '@fortawesome/fontawesome-free-brands';
import './index.css';

const Link = ({ url, icon, altText }) => (
  <a
    style="text-decoration: none; padding: 0 20px;"
    href={url}
    target="_blank"
    rel="noopener"
  >
    <FontAwesomeIcon icon={icon} className="my-icon" size="3x" />
    {/* <img src={icon} alt={altText} height="48" width="48" /> */}
  </a>
);

const loadFont = url => {
  const font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = url;
  document.body.appendChild(font);
};

export default class App extends Component {
  componentDidMount() {
    import('./analytics.js').then(analytics => analytics.init());
    loadFont('//fonts.googleapis.com/css?family=Ubuntu');
  }

  render() {
    return (
      <div style="text-align: center; display: flex; justify-content: center; align-items: center; height: 100%; background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('assets/drums.jpg'); background-size: cover; background-position: center center;">
        <div>
          <h1 style="color: white; font-size: 2em; font-family: 'Ubuntu', sans-serif; border: 0.1em solid white; border-radius: 0 0 0 0.7em; padding: .4em;">
            Benjamin Diuguid
          </h1>
          <div>
            <Link
              url="https://github.com/BenDiuguid"
              icon={faGithub}
              altText="GitHub logo"
            />
            <Link
              url="https://medium.com/@BenDiuguid"
              icon={faMedium}
              altText="Medium logo"
            />
            <Link
              url="https://twitter.com/BenDiuguid"
              icon={faTwitter}
              altText="Twitter logo"
            />
            <Link
              url="https://www.youtube.com/user/bendiuguid"
              icon={faYoutube}
              altText="YouTube logo"
            />
          </div>
        </div>
      </div>
    );
  }
}
