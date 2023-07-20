import './styles/App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
       
      </Routes>
    </Router>
    </>
  );
}

export default App;
