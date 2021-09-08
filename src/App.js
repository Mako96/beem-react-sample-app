import ApiTest from './ApiTest';
import './App.css';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ApiTest/>
      <div className="content">
      </div>
    </div>
  );
}

export default App;
