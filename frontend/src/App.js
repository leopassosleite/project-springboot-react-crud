import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListEmployeeComponent from './components/layout/ListEmployeeComponent';
import CreateEmployeeComponent from './components/layout/CreateEmployeeComponent';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import ListProjectComponent from './components/layout/ListProjectComponent';

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
            <Route path="/projetos" element={<ListProjectComponent />} />
            <Route path="/funcionarios" element={<ListEmployeeComponent />} />
            <Route path="/inserir-funcionario" element={<CreateEmployeeComponent />} />
            <Route path="/editar-funcionario:id" element={<CreateEmployeeComponent />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
