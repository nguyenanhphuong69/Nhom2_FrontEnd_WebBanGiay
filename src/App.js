import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Header from './components/header/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
       <Hello/>
      </header>
    </div>
  );
}

export default App;
