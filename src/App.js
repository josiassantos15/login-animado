/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './sua-logo-aqui.png';
import './App.css';
// import Login from './Login'

function App() {
  return (
    <>
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    
    <div className="login-box">
    <h2>Login</h2>
    <form>
      <div className="user-box">
        <input type="text" name="" required= { true }/>
        <label>E-mail</label>
      </div>
      <div className="user-box">
        <input type="password" name="" required= { true }/>
        <label>Senha</label>
      </div>
      <a href="HomePage">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        ENTRAR
      </a>
    </form>
  </div>
  </>
  );
}

export default App;
