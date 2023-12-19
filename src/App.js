import './App.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Grid from './components/Grid'
import Cursor from './components/CustomCursor'
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
function App() {
  return (
    <Grid>
    <Navbar/>
    <Cursor/>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
      </Routes>

    </Grid>

  );
}

export default App;
