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
            <div className='container1'>
              <h2>Requisitos</h2>
              <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>
            </div>

            <div className='container2'>
              <div>
                <h3>HTML</h3>
                <p>Aprender a estruturar os elementos da página com HTML</p>
              </div>
              <div>
                <h3>CSS</h3>
                <p>Aprender a estilizar os elementos da página com CSS</p>
              </div>
              <div>
                <h3>JavaScript</h3>
                <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
              </div>
            </div>
          </section>
      </main>

      <footer>
            <p>Curso de introdução de React JS</p>
      </footer>
    </div>
  );
}

export default App;
