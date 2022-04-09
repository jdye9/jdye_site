import './App.css';
import Navbar from './components/Navbar';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <span className='App-header'>
        <Main/>
      </span>
    </div>
  );
}

export default App;
