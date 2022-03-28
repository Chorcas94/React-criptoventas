
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';
import Productos from './pages/Productos';




function App() {
  return (
    <Router >
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
          <div className='content'>
            <Routes>
              <Route path='/' exact={true} element={<Home/>}/>
              <Route path='/Usuarios' exact={true} element={<Usuarios/>}/>
              <Route path='/Productos' exact={true} element={<Productos/>}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
