import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListEmployeeComponent from './components/layout/ListEmployeeComponent';
import CreateEmployeeComponent from './components/layout/CreateEmployeeComponent';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import NewProject from './pages/NewProject';
import Projects from './pages/Projects';

import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';



function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novo-projeto" element={<NewProject />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/funcionarios" element={<ListEmployeeComponent />} />
            <Route path="/inserir-funcionario" element={<CreateEmployeeComponent />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
