import Logo from "../src/images/hogwarts-crest-transparent.png";
export default function App() {
  return (
    <div className="App">
      <div className="container"></div>
      <div>
        <div>
          <img src={Logo} alt="hogwarts-crest-transparent.png" />
        </div>
        <h1>Hogwarts School of Witchcraft and Wizardry</h1>
        <p>
          We are pleased to inform you that you have been accepted at Hogwarts
          School of Witchcraft and Wizardry. <br />
        </p>
        <footer>
          <a
            href="https://ffionwyn.github.io/react-hogwarts-website/"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          <span> by Ffion Griffiths hosted on Netlify</span>
        </footer>
      </div>
    </div>
  );
}
