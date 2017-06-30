import { h, Component } from 'preact';
import './index.css';

const Link = ({ url, imgUrl, altText }) =>
  <a
    style="text-decoration: none; padding: 0 20px;"
    href={url}
    target="_blank"
    rel="noopener"
  >
    <img src={imgUrl} alt={altText} height="48" width="48" />
  </a>;

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
              imgUrl="assets/icons/github.svg"
              altText="GitHub logo"
            />
            <Link
              url="https://medium.com/@BenDiuguid"
              imgUrl="assets/icons/medium.svg"
              altText="Medium logo"
            />
            <Link
              url="https://twitter.com/BenDiuguid"
              imgUrl="assets/icons/twitter.svg"
              altText="Twitter logo"
            />
            <Link
              url="https://www.youtube.com/user/bendiuguid"
              imgUrl="assets/icons/youtube-play.svg"
              altText="YouTube logo"
            />
          </div>
        </div>
      </div>
    );
  }
}
