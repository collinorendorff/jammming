import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';

function App() {
  

  return (
    <div className="App">
      <div className='header'>
        <h1>Ja<span className='mmm'>mmm</span>ing</h1>
      </div>
      <div className='main'>
        <br/><br/>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
