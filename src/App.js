import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faMedium,
  faTwitter,
  faGithub,
} from "@fortawesome/fontawesome-free-brands";
import WebFont from "webfontloader";

const Link = ({ url, icon, altText }) => (
  <a
    style={{
      textDecoration: "none",
      padding: "0 20px",
    }}
    href={url}
    target="_blank"
    rel="noreferrer"
    aria-label={altText}
  >
    <FontAwesomeIcon icon={icon} className="my-icon" size="3x" />
  </a>
);

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Ubuntu"],
      },
    });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${process.env.PUBLIC_URL}/drums.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "2em",
            fontFamily: "'Ubuntu', sans-serif",
            border: "0.1em solid white",
            borderRadius: "0 0 0 0.7em",
            padding: ".4em",
          }}
        >
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

export default App;
