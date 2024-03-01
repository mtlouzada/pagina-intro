import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React JS
        </p>
      </header>

      <main>
          <section className="box-titulo">
            <h1>React JS</h1>
            <p>Biblioteca JavaScript para criar SPAs</p>
            <a href="https://reactjs.org/" target="_blank">Site Oficial</a>
          </section>

          <section className="box-requisitos">
              <h2>Requisitos</h2>
              <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>
          </section>

          <section className='box-conteudo'>
            
              <div className='conteudo'>
                <h3>HTML</h3>
                <p>Aprender a estruturar os elementos da página com HTML</p>
              </div>

              <div className='conteudo'>
                <h3>CSS</h3>
                <p>Aprender a estilizar os elementos da página com CSS</p>
              </div>

              <div className='conteudo'>
                <h3>JavaScript</h3>
                <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
              </div>
            
          </section>
      </main>

      <footer>
            <p>Desenvolvido por Matheus Louzada &copy;</p>
      </footer>
    </div>
  );
}

export default App;
