import './App.css';
import Home from './Home';
import Enuso from './Enuso';
import Navbar from './Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MapaAlmacen from './components/MapaAlmacen';
import Incidencias from './components/Incidencias';
import Record from './components/Record';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/enuso" element={<Enuso />} />
        <Route path="/mapa" element={<MapaAlmacen />} />
        <Route path="/reportar" element={<Incidencias />} />
        <Route path="/records" element={<Record />} />




      </Routes>
    </BrowserRouter>

  );

}


export default App;
