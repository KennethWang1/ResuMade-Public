import './App.css';
import Header from './pages/Header.js';
import EditPortfolio from './pages/Dashboard.js';

function App() {
  return (
    <div className = "display" id = "display">
      <Header/>
      <EditPortfolio/>
    </div>
  );
}

export default App;
