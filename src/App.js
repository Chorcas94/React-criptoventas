
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Productos from './pages/Productos/Productos';
import ProductosDetalle from './pages/Productos/ProductosDetalle';
import Categorias from './pages/Productos/Categorias';
import Notfound from './pages/Notfound';



function App() {
  return (
    
    <Router >
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
          <div className='content'>
            <Routes>
              <Route path='/' exact={true} element={<Home/>}/>
              <Route path='/usuarios' exact={true} element={<Usuarios/>}/>
              <Route path='/categorias' exact={true} element={<Categorias/>}/>
              <Route path='/productos' exact={true} element={<Productos/>}/>
              <Route path='/productos/detalle' exact={true} element={<ProductosDetalle/>}/>
              <Route path='*' element={<Notfound/>}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
