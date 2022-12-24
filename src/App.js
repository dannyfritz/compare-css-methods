import appStyles from "./App.module.css";
import headerStyles from "./Header.module.css";
import mainStyles from "./Main.module.css";
import figureStyles from "./Figure.module.css";


function Header() {
  return (
    <header className={headerStyles.header}>
      <h1>
        <a href="#">
          <img src="https://picsum.photos/80" />
          <p>Great (or Greatest?) Photos</p>
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Figure({ random }) {
  return (
    <figure className={figureStyles.figure}>
      <img src={`https://picsum.photos/500?random=${random}`} />
      <figcaption>
        <p>
          I love how this photo looks. This is my absolute favorite photo! This
          photo has changed how I think about the world.
        </p>
      </figcaption>
    </figure>
  );
}

function Main() {
  return (
    <main className={mainStyles.main}>
      <article>
        <h2>The Best Images on the Internet</h2>
        <ol>
          <li>
            <Figure random="1" />
          </li>
          <li>
            <Figure random="2" />
          </li>
          <li>
            <Figure random="3" />
          </li>
        </ol>
      </article>
    </main>
  );
}

function App() {
  return (
    <div className={appStyles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
