import logo from './logo.svg';
import './App.css';
import UserComponent from './components/user';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo con React!
        </p>
      <p>Selvin Tomás Ch.</p>
      </header>
      <UserComponent></UserComponent>
    </div>
  );
}


export default App;
