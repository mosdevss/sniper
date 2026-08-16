// src/App.tsx
function App() {
  return (
    <>
      <header className="site-header">
        <strong>Your Site</strong>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>

      <main className="home-hero">
        <h1>Welcome to React</h1>
        <p>This page is styled through the 7-1 Sass architecture.</p>
        <a className="button" href="https://vite.dev">
          Read the docs
        </a>
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Your Site</p>
      </footer>
    </>
  );
}

export default App;
