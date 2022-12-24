import styled from '@emotion/styled/macro'

const HeaderStyled = styled.header`
  /* LAYOUT */

  align-items: center;
  display: flex;
  height: 80px;
  box-sizing: content-box;
  justify-content: space-between;
  padding: var(--length-sm) var(--length-lg);

  h1 a {
    align-items: center;
    display: flex;
  }

  h1 img {
    margin-right: var(--length-md);
    height: 80px;
    width: 80px;
  }

  nav > ul {
    display: flex;
  }

  nav li > a {
    padding: var(--length-md);
  }

  @media (max-width: 55rem) {
    height: initial;
    flex-direction: column;
  }

  /* STYLE */

  background-color: var(--header-bg-color);
  border-bottom: 1px solid var(--color-8);
  box-shadow: var(--header-box-shadow);
  font-weight: bolder;
  z-index: 1;

  nav > ul {
    list-style: none;
  }
  nav a {
    text-decoration: underline;
  }
`

function Header() {
  return (
    <HeaderStyled>
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
    </HeaderStyled>
  );
}

const FigureStyled = styled.figure`
  /* LAYOUT */

  display: flex;
  align-items: center;
  background-color: var(--figure-bg-color);

  figcaption {
    margin: var(--length-lg) var(--length-md);
  }

  > img {
    min-width: 500px;
    min-height: 500px;
  }

  @media (max-width: 55rem) {
    flex-direction: column;
    > img {
      width: 100%;
      min-width: initial;
      min-height: initial;
    }
  }


  /* STYLE */

  box-shadow: var(--figure-box-shadow);
  border-radius: var(--figure-border-radius);
  overflow: hidden;

  figcaption {
    font-size: 1rem;
    text-indent: var(--length-lg);
    text-align: justify;
  }
`

function Figure({ random }) {
  return (
    <FigureStyled>
      <img src={`https://picsum.photos/500?random=${random}`} />
      <figcaption>
        <p>
          I love how this photo looks. This is my absolute favorite photo! This
          photo has changed how I think about the world.
        </p>
      </figcaption>
    </FigureStyled>
  );
}

const MainStyled = styled.main`
/* LAYOUT */

align-items: center;
display: flex;
flex-direction: column;
padding: var(--length-lg);

article {
  max-width: 50rem;
}

article > h2 {
  margin-bottom: var(--length-md);
}

article li:not(:last-child) {
  margin-bottom: var(--length-lg);
}

/* STYLE */

background-color: var(--body-bg-color);

article > ol {
  list-style: none;
}
`

function Main() {
  return (
    <MainStyled>
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
    </MainStyled>
  );
}

const AppStyled = styled.div`
  /* LAYOUT */

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    flex-grow: 1;
  }
`

function App() {
  return (
    <AppStyled>
      <Header />
      <Main />
    </AppStyled>
  );
}

export default App;
