import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import Home from './Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funcionarios" element={<ListEmployeeComponent />} />
          <Route path="/inserir-funcionario" element={<CreateEmployeeComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
