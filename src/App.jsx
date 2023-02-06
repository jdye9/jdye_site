import './App.css';
import Navbar from './components/Navbar';
import Main from './Main';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <span className='app-body'>
        <Main/>
      </span>
    </div>
  );
}

export default App;
