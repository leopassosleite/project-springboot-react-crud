import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funcionarios" element={<ListEmployeeComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
